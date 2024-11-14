const defaultGraph = {
  "last_node_id": 43,
  "last_link_id": 64,
  "nodes": [
    {
      "id": 41,
      "type": "Label (rgthree)",
      "pos": {
        "0": 1077,
        "1": 746
      },
      "size": {
        "0": 487.265625,
        "1": 20
      },
      "flags": {
        "allow_interaction": true
      },
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "title": "sdvn.me | comfy.vn | fluxai.vn | trainlora.vn | shakker.vn",
      "properties": {
        "fontSize": 20,
        "fontFamily": "Arial",
        "fontColor": "#ffffff",
        "textAlign": "left",
        "backgroundColor": "transparent",
        "padding": 0,
        "borderRadius": 0
      },
      "color": "#fff0",
      "bgcolor": "#fff0"
    },
    {
      "id": 42,
      "type": "Label (rgthree)",
      "pos": {
        "0": 959,
        "1": 688
      },
      "size": {
        "0": 605.71875,
        "1": 56
      },
      "flags": {
        "allow_interaction": true
      },
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "title": "STABLEDIFFUSION.VN",
      "properties": {
        "fontSize": 56,
        "fontFamily": "Arial",
        "fontColor": "#ffffff",
        "textAlign": "left",
        "backgroundColor": "transparent",
        "padding": 0,
        "borderRadius": 0
      },
      "color": "#fff0",
      "bgcolor": "#fff0"
    },
    {
      "id": 38,
      "type": "CryptoCatImage",
      "pos": {
        "0": 952,
        "1": 121
      },
      "size": {
        "0": 611.934326171875,
        "1": 544.97998046875
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 57,
          "label": "images"
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "CryptoCatImage"
      },
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 5,
      "type": "LoadImage",
      "pos": {
        "0": 243,
        "1": 478
      },
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            34,
            55
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "IMAGE"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "MASK"
        }
      ],
      "title": "Face",
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "Face.png",
        "image"
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 33,
      "type": "ExcuteCryptoNode",
      "pos": {
        "0": 592,
        "1": 120
      },
      "size": {
        "0": 341.6171875,
        "1": 131.93406677246094
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "input_anything",
          "type": "*",
          "link": 55,
          "shape": 7
        },
        {
          "name": "input_anything2",
          "type": "*",
          "link": 56
        },
        {
          "name": "input_anything3",
          "type": "*",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            57
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "IMAGE"
        }
      ],
      "properties": {
        "Node name for S&R": "ExcuteCryptoNode"
      },
      "widgets_values": [
        "/content/SDVN-WebUI/Workflow/Auto_Swap_Face.dat"
      ]
    },
    {
      "id": 43,
      "type": "easy bookmark",
      "pos": {
        "0": 93,
        "1": 48
      },
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {
        "collapsed": true
      },
      "order": 3,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "title": "🔖 1",
      "properties": {},
      "widgets_values": [
        "1",
        1.2
      ]
    },
    {
      "id": 40,
      "type": "Note",
      "pos": {
        "0": 596,
        "1": 298
      },
      "size": {
        "0": 337.2489013671875,
        "1": 208.2118377685547
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "#Workflow Autoswap_Face by SDVN\n\nB1: Tải ảnh gốc cần thay đổi face và face cần thay đổi\nB2: Ấn Queue và đợi kết quả\n\nLưu ý:\n - Lần tạo ảnh đầu tiên sẽ lâu hơn một chút\n - Workflow chạy mượt với mọi size ảnh và GPU\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 4,
      "type": "LoadImage",
      "pos": {
        "0": 245,
        "1": 116
      },
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            56,
            60,
            62
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "IMAGE"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [],
          "slot_index": 1,
          "shape": 3,
          "label": "MASK"
        }
      ],
      "title": "Origin Image",
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "Origin image.jpeg",
        "image"
      ],
      "color": "#322",
      "bgcolor": "#533"
    }
  ],
  "links": [
    [
      55,
      5,
      0,
      33,
      1,
      "*"
    ],
    [
      56,
      4,
      0,
      33,
      2,
      "*"
    ],
    [
      57,
      33,
      0,
      38,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        0.25390625,
        -0.515625
      ]
    }
  },
  "version": 0.4
}