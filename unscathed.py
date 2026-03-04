import os
import html

EXTENSIONS = {'.js', '.html', '.htm', '.css', '.php', '.txt', '.py', '.json', '.xml', '.vue', '.ts'}

def unescape_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        unescaped = html.unescape(content)
        
        if unescaped != content:
            backup_path = filepath + '.bak'
            with open(backup_path, 'w', encoding='utf-8') as bf:
                bf.write(content)
            print(f"Backup created: {backup_path}")
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(unescaped)
            print(f"*CLEANED:* {filepath}")
            return True
        else:
            print(f"No change: {filepath}")
            return False
            
    except UnicodeDecodeError:
        print(f"Skipped (bad encoding): {filepath}")
        return False
    except Exception as e:
        print(f"Error on {filepath}: {e}")
        return False

def clean_folder(root_dir):
    changed_count = 0
    processed_count = 0
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if any(file.lower().endswith(ext) for ext in EXTENSIONS):
                filepath = os.path.join(root, file)
                processed_count += 1
                if unescape_file(filepath):
                    changed_count += 1
    
    print(f"\nProcessed {processed_count} files total.")
    return changed_count

# Uses the folder VS Code is currently open in
FOLDER = os.getcwd()

print(f"Starting cleanup in: {FOLDER}")
changed = clean_folder(FOLDER)
print(f"Finished. {changed} files were actually cleaned (entities unescaped).")
print("Any changed files have .bak backups next to them.")
print("Open a few .html/.js files and search for 'mailto:' or '@' — should be normal text now.")