const defaultGraph = {
  "last_node_id": 74,
  "last_link_id": 129,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1171.804931640625,
        78.25852966308594
      ],
      "size": [
        210,
        46
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 120
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 123
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1398.259033203125,
        78.25852966308594
      ],
      "size": [
        356.08502197265625,
        499.8143310546875
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 53,
      "type": "EmptyLatentImage",
      "pos": [
        512.1409301757812,
        409.4597473144531
      ],
      "size": [
        303.3410339355469,
        111.14437103271484
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            119
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        768,
        1152,
        1
      ]
    },
    {
      "id": 71,
      "type": "SDVN KSampler",
      "pos": [
        838.7449951171875,
        78.25852966308594
      ],
      "size": [
        315,
        614
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 126
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 129
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": null,
          "shape": 7
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 119,
          "shape": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null,
          "shape": 7
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            120
          ],
          "slot_index": 0
        },
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN KSampler"
      },
      "widgets_values": [
        "Flux",
        "None",
        1,
        20,
        8,
        "euler",
        "normal",
        0,
        "randomize",
        false,
        1024,
        1024,
        3.5
      ]
    },
    {
      "id": 73,
      "type": "SDVN Load Lora",
      "pos": [
        77.71563720703125,
        78.25852966308594
      ],
      "size": [
        315,
        218
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 124,
          "shape": 7
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 125,
          "shape": 7
        }
      ],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            126
          ],
          "slot_index": 0
        },
        {
          "name": "clip",
          "type": "CLIP",
          "links": [
            128
          ],
          "slot_index": 1
        },
        {
          "name": "info",
          "type": "STRING",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN Load Lora"
      },
      "widgets_values": [
        true,
        "",
        "model.safetensors",
        "None",
        1,
        1
      ]
    },
    {
      "id": 72,
      "type": "SDVN Load Checkpoint",
      "pos": [
        -260.14373779296875,
        78.25852966308594
      ],
      "size": [
        315,
        170
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            124
          ]
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            125
          ]
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            123
          ]
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN Load Checkpoint"
      },
      "widgets_values": [
        true,
        "",
        "model.safetensors",
        "Checkpoint/Flux_dev_v1-fp8.safetensors"
      ]
    },
    {
      "id": 68,
      "type": "Note",
      "pos": [
        -261.73828125,
        318.4453125
      ],
      "size": [
        315.7266540527344,
        143.80174255371094
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "Flux text - to - img workflow\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Sub Web: trainlora.vn | shakker.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 74,
      "type": "SDVN CLIP Text Encode",
      "pos": [
        413,
        78
      ],
      "size": [
        402,
        284
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 128
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            129
          ]
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN CLIP Text Encode"
      },
      "widgets_values": [
        "",
        "",
        "None",
        "None",
        0,
        "randomize"
      ]
    }
  ],
  "links": [
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      75,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      76,
      12,
      0,
      44,
      0,
      "MODEL"
    ],
    [
      77,
      11,
      0,
      48,
      0,
      "CLIP"
    ],
    [
      78,
      10,
      0,
      30,
      1,
      "VAE"
    ],
    [
      79,
      12,
      0,
      51,
      0,
      "MODEL"
    ],
    [
      80,
      11,
      0,
      51,
      1,
      "CLIP"
    ],
    [
      81,
      10,
      0,
      51,
      2,
      "VAE"
    ],
    [
      119,
      53,
      0,
      71,
      3,
      "LATENT"
    ],
    [
      120,
      71,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      123,
      72,
      2,
      8,
      1,
      "VAE"
    ],
    [
      124,
      72,
      0,
      73,
      0,
      "MODEL"
    ],
    [
      125,
      72,
      1,
      73,
      1,
      "CLIP"
    ],
    [
      126,
      73,
      0,
      71,
      0,
      "MODEL"
    ],
    [
      128,
      73,
      1,
      74,
      0,
      "CLIP"
    ],
    [
      129,
      74,
      0,
      71,
      1,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.9090909090909091,
      "offset": [
        518.477734375,
        179.63482696281008
      ]
    },
    "ue_links": []
  },
  "version": 0.4
}