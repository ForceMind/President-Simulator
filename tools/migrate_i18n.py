import os
import re
import json

# 配置
DATA_DIR = r"e:\Privy\President-Simulator\js\data"
OUTPUT_LOCALE = r"e:\Privy\President-Simulator\js\i18n_data.json"

# 提取正则 'key': { zh: "...", en: "..." }
# 匹配 title: { ... }, desc: { ... }, text: { ... }
# 注意：JS对象可能跨行，这里使用简易匹配，如果格式复杂可能需要更强的解析器
# 假设格式比较规范，都在一行或者标准缩进
REGEX_LOC_OBJ = re.compile(r'(title|desc|text|type)\s*:\s*(\{.*?zh.*?en.*?\})', re.DOTALL)

# 存储提取的文本 { "id": { zh:..., en:... } }
extracted_data = {}

def generate_id(file_prefix, key_type, counter):
    return f"{file_prefix}_{key_type}_{counter:03d}"

def process_file(filepath):
    filename = os.path.basename(filepath)
    file_prefix = filename.replace('.js', '').replace('cards_', '').replace('events_', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有匹配
    # 由于正则很难完美匹配嵌套大括号，这里采用逐个查找替换的策略
    # 我们假设结构是 key: { ... } 
    
    counter = 1
    new_content = content
    
    # 查找所有可能是本地化对象的地方
    # 这是一个简化处理，实际工程可能需要AST
    matches = list(REGEX_LOC_OBJ.finditer(content))
    
    # 倒序替换，以免改变索引
    for match in reversed(matches):
        full_match = match.group(0) # title: { zh: "...", ... }
        key_type = match.group(1)   # title
        obj_str = match.group(2)    # { zh: "...", ... }
        
        # 尝试解析对象字符串为JSON (需要处理JS对象的非标准JSON格式，如键名无引号)
        # 这里手动提取 zh 和 en 的内容
        zh_match = re.search(r'zh\s*:\s*["\'](.*?)["\']', obj_str)
        en_match = re.search(r'en\s*:\s*["\'](.*?)["\']', obj_str)
        
        if zh_match and en_match:
            zh_text = zh_match.group(1)
            en_text = en_match.group(1)
            
            # 生成ID
            loc_id = generate_id(file_prefix, key_type, counter)
            counter += 1
            
            # 存入字典
            # Reformatted to pivot by language for easier merging into window.I18N = { zh: {...}, en: {...} }
            if "zh" not in extracted_data: extracted_data["zh"] = {}
            if "en" not in extracted_data: extracted_data["en"] = {}
            
            extracted_data["zh"][loc_id] = zh_text
            extracted_data["en"][loc_id] = en_text
            
            # 替换原文本
            # title: "full_id"
            replacement = f'{key_type}: "{loc_id}"'
            
            # 在新内容中替换 (注意：这是简单的字符串替换，如果内容有重复需小心)
            # 使用span来替换是安全的
            start, end = match.span()
            new_content = new_content[:start] + replacement + new_content[end:]
            
    # 写回文件
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Processed {filename}: {counter-1} items extracted.")

def main():
    # 1. 遍历文件
    files = [f for f in os.listdir(DATA_DIR) if f.endswith('.js')]
    
    for file in files:
        process_file(os.path.join(DATA_DIR, file))
        
    # 2. 导出 JSON
    with open(OUTPUT_LOCALE, 'w', encoding='utf-8') as f:
        json.dump(extracted_data, f, indent=4, ensure_ascii=False)
        
    print(f"Extraction complete. Data saved to {OUTPUT_LOCALE}")
    print("Next Step: Copy the content of i18n_data.json into your js/i18n.js file variable.")

if __name__ == "__main__":
    main()
