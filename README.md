# vscode-ImageOptimizer

[![Build status](https://ci.appveyor.com/api/projects/status/ju1to90vscseio43?svg=true)](https://ci.appveyor.com/project/tylerbhughes/vscode-imageoptimizer)

A port of the Visual Studio extension ImageOptimizer for the VS Code editor. 

--------------------------------

Uses industry standard tools to optimize any JPEG, PNG
and Gifs - including animated Gifs. It can do both lossy
and lossless optimization.

## Features

Adds a right-click menu to any folder and image in Solution Explorer
that let's you automatically optimize all PNG, GIF and JPEG files
in that folder. 

- Optimizes PNGs (uses Zopfli compression)
- Optimizes GIFs
- Optimizes animated GIFs
- Optimizes JPGs (uses MozJPEG)
- Works on single images files or entire folders
- Copy any image as base64 dataURI to clipboard

### Lossless optimization
If you chose lossless optimization, the tool will
do its optimizations without changing the quality of the image.

### Lossy optimizations
If you decide to sacrifice just a small amount of image quality
(which in most cases is unnoticeable to the human eye), you will
be able to save up to 90% of the initial file weight. Lossy
optimization will give you outstanding results with just a
fraction of image quality loss.

## Performance
Optimizing an image can easily take several seconds which feels
slow. This extension parallelizes the workload on each CPU core
available on the machine. This speeds up the optimization
significantly.

## Contribute
Check out the [contribution guidelines](.github/CONTRIBUTING.md)
if you want to contribute to this project.