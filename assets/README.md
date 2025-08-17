# 🎨 Assets Folder

This folder contains character sprites, images, and other visual resources for the Durian Chibi Character.

## Recommended File Structure

```
assets/
├── sprites/
│   ├── idle/
│   │   ├── idle_01.png
│   │   ├── idle_02.png
│   │   ├── idle_03.png
│   │   └── idle_04.png
│   ├── walk/
│   │   ├── walk_01.png
│   │   ├── walk_02.png
│   │   ├── walk_03.png
│   │   └── walk_04.png
│   ├── attack/
│   │   ├── attack_01.png
│   │   ├── attack_02.png
│   │   ├── attack_03.png
│   │   └── attack_04.png
│   └── special/
│       ├── special_01.png
│       ├── special_02.png
│       ├── special_03.png
│       └── special_04.png
├── backgrounds/
│   ├── forest.png
│   ├── garden.png
│   └── sky.png
├── ui/
│   ├── health_bar.png
│   ├── energy_bar.png
│   └── buttons.png
└── sounds/
    ├── idle.wav
    ├── walk.wav
    ├── attack.wav
    └── special.wav
```

## Sprite Specifications

### Dimensions
- **Recommended Size**: 256x256 pixels
- **Format**: PNG with transparency
- **Color Depth**: 32-bit (RGBA)

### Animation Frames
- **Idle**: 4-6 frames for gentle breathing/bobbing
- **Walk**: 8 frames for smooth rolling motion
- **Attack**: 6-8 frames for attack sequence
- **Special**: 8-10 frames for ability animation

### Style Guidelines
- **Chibi Proportions**: Large head, small body (2:1 ratio)
- **Color Palette**: Golden yellow (#FFD700) base with green (#228B22) spikes
- **Line Art**: Clean, smooth lines with slight thickness
- **Shading**: Simple cell shading with highlights

## Integration Notes

The current implementation uses HTML5 Canvas for drawing, but you can easily replace it with sprite-based animation by:

1. Loading sprite images in the JavaScript
2. Replacing canvas drawing with sprite rendering
3. Updating the animation system to cycle through frames

## Export Settings

When creating sprites in your preferred art software:

- **Resolution**: 300 DPI for print, 72 DPI for web
- **Anti-aliasing**: Enabled for smooth edges
- **Transparency**: Preserve alpha channel
- **Compression**: PNG with minimal compression for quality

## Future Enhancements

- Add alternative color schemes
- Create seasonal variations (winter, summer, etc.)
- Design evolution stages (baby, teen, adult)
- Include accessories and costumes
