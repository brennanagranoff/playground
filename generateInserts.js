//INPUT AN ARRAY OF OBJECTS
var templateSQL = [
  {
    sku: "HS-SO-designNumber-L",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "HS-L", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4850, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "HS-SO-designNumber-M",
    width: "3010",
    height: "4815",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 4815, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 4815, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "HS-M", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4550, "Width": 170, "Height": 4815, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 4815, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "HS-SO-designNumber-S",
    width: "3010",
    height: "4515",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 4515, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 4515, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "HS-S", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4215, "Width": 170, "Height": 4515, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 4515, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "HS-SO-designNumber-XL",
    width: "3900",
    height: "5700",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 5700, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4410, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1865, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 5700, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4410, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3900, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1950, "Y": 0, "Text": "HS-XL", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5400, "Width": 170, "Height": 5700, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5700, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "HS-SO-designNumber-XS",
    width: "2440",
    height: "3715",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1135, "BoxHeight": 3715, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 2720, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1135, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1135, "BoxHeight": 3715, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 2720, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 2440, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1220, "Y": 0, "Text": "HS-XS", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 3415, "Width": 170, "Height": 3715, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 3715, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NN-SO-designNumber-L",
    width: "3010",
    height: "5675",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5675, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3765, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5675, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3765, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NN-L", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5375, "Width": 170, "Height": 5675, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5675, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NN-SO-designNumber-M",
    width: "3010",
    height: "5400",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5400, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3550, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5400, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3550, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NN-M", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5100, "Width": 170, "Height": 5400, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5400, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NN-SO-designNumber-S",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3330, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3330, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NN-S", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4815, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NN-SO-designNumber-XL",
    width: "3900",
    height: "6000",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 6000, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4420, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1865, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 6000, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4420, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3900, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1950, "Y": 0, "Text": "NN-XL", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5700, "Width": 170, "Height": 6000, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 6000, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NE-SO-designNumber-L",
    width: "3010",
    height: "5675",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5675, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3765, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5675, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3765, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NE-L", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5375, "Width": 170, "Height": 5675, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5675, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NE-SO-designNumber-M",
    width: "3010",
    height: "5400",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5400, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3550, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5400, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3550, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NE-M", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5100, "Width": 170, "Height": 5400, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5400, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NE-SO-designNumber-S",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3330, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3330, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NE-S", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4815, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NE-SO-designNumber-XL",
    width: "3900",
    height: "6000",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 6000, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4420, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1865, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1865, "BoxHeight": 6000, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 4420, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3900, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1950, "Y": 0, "Text": "NE-XL", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5700, "Width": 170, "Height": 6000, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 6000, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "NT-SO-designNumber-L",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3300, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "NT-L", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4850, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "KH-SO-designNumber-L",
    width: "3010",
    height: "5740",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5740, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 0, "ResizeHeight": 5740, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5740, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 0, "ResizeHeight": 5740, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "KH-L", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 5440, "Width": 170, "Height": 5740, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5740, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "KH-SO-designNumber-M",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "KH-M", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4815, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "KH-SO-designNumber-S",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "KH-S", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4815, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
  {
    sku: "KH-SO-designNumber-XS",
    width: "3010",
    height: "5115",
    dpi: "300",
    ghost: "",
    output_bucket: "hoopswagg.approved/socks-one-side",
    crop: "",
    touchup: "",
    approval: "f",
    images:
      '[{"ID": 0, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 0, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 0, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}, {"ID": 1, "Name": "designNumber", "Path": "backgrounds/presets", "Type": "static", "Color": "", "FlipH": false, "FlipV": false, "ImageX": 1420, "ImageY": 0, "Resize": true, "Source": "resources", "AnchorX": 1, "AnchorY": 0, "IsColor": false, "BoxWidth": 1420, "BoxHeight": 5115, "Extension": "jpg", "ResizeAuto": false, "ResizeWidth": 3315, "ResizeHeight": 0, "ResizeFunction": 0}]',
    image_placements:
      '[{"X": 0, "Y": 0, "ID": 0, "Rotate": false, "AnchorX": 0, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}, {"X": 3010, "Y": 0, "ID": 1, "Rotate": false, "AnchorX": 1, "AnchorY": 0, "RotateX": 0, "RotateY": 0, "RotateAngle": 0}]',
    texts: "",
    text_placements: "",
    info_bars:
      '[{"X": 1505, "Y": 0, "Text": "KH-XS", "FlipH": true, "FlipV": false, "TextX": 85, "TextY": 4815, "Width": 170, "Height": 5115, "AnchorX": 0.5, "AnchorY": 0, "TextSize": 44, "Background": "#ffffff", "TextAnchorX": 0.5, "TextAnchorY": 0}]',
    info_blocks: '[{"X": 0, "Y": 5115, "FlipH": true, "FlipV": false, "Width": 1000, "AnchorX": 0, "AnchorY": 0}]',
  },
];

function createInserts(tableName, data) {
  if (data.length > 0) {
    var masterInsert = "";
    //loop through data array
    for (let r = 0; r < data.length; r++) {
      var insertStatement = "INSERT INTO " + tableName + " (";
      var valuesStatement = "VALUES (";
      //set active object
      const object = data[r];
      //convert object to array of values
      var objectPairs = Object.entries(object);
      //loop through object pairs
      for (let s = 0; s < objectPairs.length; s++) {
        //-----INSERT-----//
        //set key
        const key = objectPairs[s][0];
        //append key to insert statement
        insertStatement = insertStatement.concat(key);
        //----VALUES----//
        //set value
        const value = objectPairs[s][1];
        //stringify value if object
        if (typeof value == "object") {
          var formattedValue = JSON.stringify(value);
        } else {
          formattedValue = value;
        }

        if (value == null || value == "") {
          //appened to values statement
          valuesStatement = valuesStatement.concat("NULL");
        } else {
          //appened to values statement
          valuesStatement = valuesStatement.concat("'" + formattedValue + "'");
        }

        //check if NOT last key in object
        if (s !== objectPairs.length - 1) {
          //append comma
          insertStatement = insertStatement.concat(",");
          valuesStatement = valuesStatement.concat(",");
        }
      }
      //close insert statement
      insertStatement = insertStatement.concat(") ");
      //close values statement
      valuesStatement = valuesStatement.concat(");");
      //combine for full statement
      var fullInsert = insertStatement.concat(valuesStatement);
      //add to master expression
      masterInsert = masterInsert.concat(fullInsert);
    }
    //return master expression
    return masterInsert;
  } else return "no input";
}
console.log(createInserts("new_product_templates", templateSQL));
