# batch_resize_keep_aspect.py
from PIL import Image
import os
import sys

def resize_keep_aspect_and_save(input_path, target_sizes, dry_run=False):
    """
    Resize image preserving aspect ratio so the longer side matches the target size.
    Saves in the same folder with name like original-800x600.jpg
    Skips if file already exists.
    """
    if not os.path.isfile(input_path):
        print(f"  Not found (skipped): {input_path}")
        return

    folder = os.path.dirname(input_path)
    filename = os.path.basename(input_path)
    name, ext = os.path.splitext(filename)
    ext = ext.lower()

    if ext not in ('.jpg', '.jpeg', '.png'):
        print(f"  Skipping non-web image: {filename}")
        return

    try:
        with Image.open(input_path) as img:
            # Convert to RGB if needed (for clean JPEG output)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            orig_w, orig_h = img.size

            for max_w, max_h in target_sizes:
                # We use the larger of the two target dimensions as limit
                max_side = max(max_w, max_h)

                # Calculate scaling factor to fit inside max_side × max_side box
                scale = max_side / max(orig_w, orig_h)
                if scale >= 1:
                    # Image is already smaller → skip or copy if you want
                    # Here we skip to avoid unnecessary duplicates
                    continue

                new_w = int(orig_w * scale)
                new_h = int(orig_h * scale)

                # Make sure we don't go over either dimension
                if new_w > max_w or new_h > max_h:
                    scale = min(max_w / orig_w, max_h / orig_h)
                    new_w = int(orig_w * scale)
                    new_h = int(orig_h * scale)

                size_str = f"{new_w}x{new_h}"
                new_filename = f"{name}-{size_str}{ext}"
                output_path = os.path.join(folder, new_filename)

                if os.path.exists(output_path):
                    print(f"  Already exists (skipped): {new_filename}")
                    continue

                if dry_run:
                    print(f"  Would create: {new_filename} ({new_w}×{new_h})")
                    continue

                resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

                if ext in ('.jpg', '.jpeg'):
                    resized.save(output_path, "JPEG", quality=92, optimize=True)
                else:
                    resized.save(output_path, quality=92)

                print(f"  Saved: {new_filename} ({new_w}×{new_h})")

    except Exception as e:
        print(f"  Error on {filename}: {e}")


def process_all_folders(start_folder, target_sizes, dry_run=False):
    print(f"\nScanning recursively: {os.path.abspath(start_folder)}")
    if dry_run:
        print("DRY RUN – no files will be created\n")

    count = 0

    for root, _, files in os.walk(start_folder):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, start_folder)
                print(f"→ {rel_path}")

                resize_keep_aspect_and_save(full_path, target_sizes, dry_run)
                count += 1

    print(f"\nDone. Images processed: {count}")


# ────────────────────────────────────────────────
#  Customize here
# ────────────────────────────────────────────────

if name == "__main__":
    # Change to your main folder (can contain completely unrelated subfolders)
    source_folder = "./"   # ← edit this
    # source_folder = "/home/paloma/projects/images"
    # source_folder = "./"   # current directory

    # Target max dimensions (longer side will be ≈ this value)
    # Common web sizes:
    target_sizes = [
        (1536, 1536),   # hero / large banner
        (768, 768),   # desktop content
        (1024, 1024),     # tablet / medium
        (300, 300),     # mobile large
        (1920, 1920),     # thumbnail / small
    ]

    dry_run = True     # Change to True to preview without creating files

    if len(sys.argv) > 1:
        source_folder = sys.argv[1]

    if not os.path.isdir(source_folder):
        print(f"Folder not found: {source_folder}")
        sys.exit(1)

    process_all_folders(source_folder, target_sizes, dry_run=dry_run)