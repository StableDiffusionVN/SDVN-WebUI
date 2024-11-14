const defaultGraph = {
  "last_node_id": 43,
  "last_link_id": 64,
  "nodes": [
    {
      "id": 33,
      "type": "ExcuteCryptoNode",
      "pos": {
        "0": 655,
        "1": 720
      },
      "size": [
        341.6171902852369,
        131.93406814847185
      ],
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
        "/content/ComfyUI/web/templates/Auto_SwapFace/prompt.dat"
      ]
    },
    {
      "id": 40,
      "type": "Note",
      "pos": {
        "0": 659,
        "1": 898
      },
      "size": [
        337.2488939877733,
        208.2118380182983
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "#Workflow Autoswap_Face by SDVN\n\nB1: Tải ảnh gốc cần thay đổi face và face cần thay đổi\nB2: Ấn Queue và đợi kết quả\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 41,
      "type": "Label (rgthree)",
      "pos": {
        "0": 1140,
        "1": 1346
      },
      "size": [
        487.265625,
        20
      ],
      "flags": {
        "allow_interaction": true
      },
      "order": 1,
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
        "0": 1022,
        "1": 1288
      },
      "size": [
        605.71875,
        56
      ],
      "flags": {
        "allow_interaction": true
      },
      "order": 2,
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
        "0": 1015,
        "1": 721
      },
      "size": [
        611.9343252767924,
        544.9799648676903
      ],
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
      "id": 4,
      "type": "LoadImage",
      "pos": {
        "0": 308,
        "1": 716
      },
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 3,
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
    },
    {
      "id": 5,
      "type": "LoadImage",
      "pos": {
        "0": 306,
        "1": 1078
      },
      "size": {
        "0": 315,
        "1": 314
      },
      "flags": {},
      "order": 4,
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
      "id": 43,
      "type": "easy bookmark",
      "pos": {
        "0": 113,
        "1": 675
      },
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {
        "collapsed": true
      },
      "order": 5,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "title": "🔖 1",
      "properties": {},
      "widgets_values": [
        "1",
        1.2
      ]
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
      "scale": 1.2,
      "offset": [
        -97,
        -635
      ]
    }
  },
  "version": 0.4
}