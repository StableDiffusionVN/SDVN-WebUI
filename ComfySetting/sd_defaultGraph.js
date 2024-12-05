const defaultGraph = {
  "last_node_id": 15,
  "last_link_id": 24,
  "nodes": [
    {
      "id": 10,
      "type": "Note",
      "pos": [
        71,
        347
      ],
      "size": [
        315.7266540527344,
        143.80174255371094
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
        "SD text - to - img workflow\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Sub Web: trainlora.vn | shakker.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1467,
        133
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
          "link": 20
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 13
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
      "id": 11,
      "type": "SDVN Load Checkpoint",
      "pos": [
        70.2109375,
        133
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
            21
          ]
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            22
          ]
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            13
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
        "Checkpoint/RealisticVision51.safetensors"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1698,
        133
      ],
      "size": [
        380.6171875,
        620.796875
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
      "id": 15,
      "type": "SDVN Load Lora",
      "pos": [
        398.2421875,
        134.77734375
      ],
      "size": [
        315,
        198
      ],
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 21
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 22
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            23
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            24
          ],
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN Load Lora"
      },
      "widgets_values": [
        false,
        "",
        "model.safetensors",
        "None",
        1,
        1
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        807.20703125,
        448.93359375
      ],
      "size": [
        315,
        106
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            16
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        768,
        1
      ]
    },
    {
      "id": 12,
      "type": "SDVN CLIP Text Encode",
      "pos": [
        724.30859375,
        133
      ],
      "size": [
        400.13671875,
        267.68359375
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 24
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            17
          ],
          "slot_index": 0
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            18
          ],
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN CLIP Text Encode"
      },
      "widgets_values": [
        "(best quality:1.2), (hyper realistic, raw photo, film gain:1.1), white shirt, portrait girl,in the city, white dress",
        "(text, watermark, 3d, nsfw, 2d)",
        589181340273576,
        "randomize"
      ]
    },
    {
      "id": 13,
      "type": "SDVN KSampler",
      "pos": [
        1136,
        133
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
          "link": 23
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 17
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 18,
          "shape": 7
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 16,
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
            20
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
        "None",
        "None",
        1,
        20,
        8,
        "euler",
        "normal",
        1,
        "randomize",
        false,
        1024,
        1024
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
      13,
      11,
      2,
      8,
      1,
      "VAE"
    ],
    [
      16,
      5,
      0,
      13,
      3,
      "LATENT"
    ],
    [
      17,
      12,
      0,
      13,
      1,
      "CONDITIONING"
    ],
    [
      18,
      12,
      1,
      13,
      2,
      "CONDITIONING"
    ],
    [
      20,
      13,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      21,
      11,
      0,
      15,
      0,
      "MODEL"
    ],
    [
      22,
      11,
      1,
      15,
      1,
      "CLIP"
    ],
    [
      23,
      15,
      0,
      13,
      0,
      "MODEL"
    ],
    [
      24,
      15,
      1,
      12,
      0,
      "CLIP"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        -22.47265625,
        38.484375
      ]
    },
    "ue_links": []
  },
  "version": 0.4
}