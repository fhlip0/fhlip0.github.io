# fhlipzero.io

This is the GitHub Pages repository for my personal blog at [fhlipzero.io](https://fhlipzero.io).

## Blog Maintenance Guide

### Setup and Workflows

The blog is built using GitBook and published to GitHub Pages. The content is managed in the `gitbook` directory and then built and published to this repository.

### Creating a New Post

1. Run `./new_post.sh "Your Post Title"` from the blog's main directory
2. Edit the created markdown file in the specified location
3. Add a reference to the new post in `gitbook/SUMMARY.md` as instructed by the script

### Previewing Changes

Run `./preview_site.sh` to build the site and start a local preview server. Visit http://localhost:4000 in your browser to see how the site looks.

### Publishing to GitHub Pages

1. Run `./publish_site.sh` from the blog's main directory
2. The script will:
   - Build the site content
   - Prepare files in the `github_pages_content` directory
   - Offer to automate the Git commands for publishing

3. If you choose the automated option (answering "y"), the script will:
   - Initialize a Git repository in `github_pages_content` if needed
   - Add and commit all files
   - Set up the remote to point to this GitHub repository
   - Ask for confirmation before pushing

4. If you decline the automated option or want to do it manually:
   - Navigate to the content directory: `cd github_pages_content`
   - Initialize Git (if needed): `git init`
   - Add all files: `git add .`
   - Commit changes: `git commit -m "Update blog"`
   - Add/update the remote: `git remote add origin https://github.com/fhlip0/fhlip0.github.io` (or `git remote set-url` if it exists)
   - Push to GitHub: `git push -u origin master --force`

### Important Files and Directories

- `gitbook/`: Source content for the blog
- `github_pages_content/`: Built content ready for GitHub Pages
- `new_post.sh`: Script to create new blog posts
- `preview_site.sh`: Script to preview the blog locally
- `publish_site.sh`: Script to build and publish the blog
- `build_manual.sh`: Underlying build script used by other scripts

## Recent Posts

- Phishy noVNC
- Attacking M1 Macs
- Tripping Over XSS
- Weblogic
- Dante

## Contact

Find me on:
- Twitter: [@fhlipZero](https://twitter.com/fhlipZero)
- LinkedIn: [Philip Holbrook](https://www.linkedin.com/in/philip-holbrook-526245101/)
- HackTheBox: [fhlipZero](https://www.hackthebox.com/home/users/profile/17794)