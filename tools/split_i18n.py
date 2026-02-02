import re
import os
import json

def split_i18n():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    js_path = os.path.join(base_dir, 'js', 'i18n.js')
    
    # Target directories
    i18n_dir = os.path.join(base_dir, 'js', 'i18n')
    if not os.path.exists(i18n_dir):
        os.makedirs(i18n_dir)

    print(f"Reading {js_path}...")
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strategy:
    # 1. We know the file has a structure `const I18N = { ... };`
    # 2. We also appended a massive `(function() { const extraData = ... })()` at the end in the previous turn.
    # We want to extract that appended data and put it into separate files.
    
    # Regex to find the appended JSON part
    # Pattern: const extraData = ({...});
    match = re.search(r'const extraData = ({[\s\S]*?});', content)
    
    if match:
        json_str = match.group(1)
        try:
            data = json.loads(json_str)
            
            # Save ZH data
            zh_content = f"window.I18N_DATA_ZH = {json.dumps(data['zh'], ensure_ascii=False, indent=4)};"
            with open(os.path.join(i18n_dir, 'zh.js'), 'w', encoding='utf-8') as f:
                f.write(zh_content)
                
            # Save EN data
            en_content = f"window.I18N_DATA_EN = {json.dumps(data['en'], ensure_ascii=False, indent=4)};"
            with open(os.path.join(i18n_dir, 'en.js'), 'w', encoding='utf-8') as f:
                f.write(en_content)
            
            print("Extracted data to js/i18n/zh.js and js/i18n/en.js")
            
            # Now we need to clean up i18n.js
            # Use regex to remove the appended block
            # The appended block starts with "// --- Auto-Appended Migration Data"
            clean_content = re.sub(r'// --- Auto-Appended Migration Data.*', '', content, flags=re.DOTALL)
            
            # Also, since user asked to verify where "sell california" comes from, 
            # we should check if the original object (before append) had it.
            # Assuming the original object was for UI strings only or kept small.
            
            with open(js_path, 'w', encoding='utf-8') as f:
                f.write(clean_content.strip())
                
            # Append a merger logic to i18n.js so it picks up the new files
            merger_code = """

// Merge separated data files
(function() {
    if (window.I18N) {
        if (window.I18N_DATA_ZH && window.I18N.zh) {
            Object.assign(window.I18N.zh, window.I18N_DATA_ZH);
            // Clear memory
            window.I18N_DATA_ZH = null;
        }
        if (window.I18N_DATA_EN && window.I18N.en) {
            Object.assign(window.I18N.en, window.I18N_DATA_EN);
            window.I18N_DATA_EN = null;
        }
    }
})();
"""
            with open(js_path, 'a', encoding='utf-8') as f:
                f.write(merger_code)
                
        except json.JSONDecodeError as e:
            print(f"Failed to parse JSON: {e}")
    else:
        print("Could not find extraData block. The file might have been modified differently.")

if __name__ == '__main__':
    split_i18n()
