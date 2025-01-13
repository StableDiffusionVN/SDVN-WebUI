const defaultGraph = {
  "last_node_id": 18,
  "last_link_id": 31,
  "nodes": [
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
        190
      ],
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            25
          ]
        },
        {
          "name": "clip",
          "type": "CLIP",
          "links": [
            26
          ]
        },
        {
          "name": "vae",
          "type": "VAE",
          "links": [
            13
          ]
        },
        {
          "name": "ckpt_path",
          "type": "STRING",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN Load Checkpoint"
      },
      "widgets_values": [
        true,
        "",
        "model.safetensors",
        "Checkpoint/RealisticVision-v5.safetensors"
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
      "order": 1,
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
      "id": 16,
      "type": "SDVN Load Lora",
      "pos": [
        398,
        135
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
          "link": 25,
          "shape": 7
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 26,
          "shape": 7
        }
      ],
      "outputs": [
        {
          "name": "model",
          "type": "MODEL",
          "links": [
            27
          ]
        },
        {
          "name": "clip",
          "type": "CLIP",
          "links": [
            29
          ]
        },
        {
          "name": "lora_path",
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
      "id": 18,
      "type": "SDVN CLIP Text Encode",
      "pos": [
        724,
        133
      ],
      "size": [
        400,
        269
      ],
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 29
        }
      ],
      "outputs": [
        {
          "name": "positive",
          "type": "CONDITIONING",
          "links": [
            30
          ]
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "links": [
            31
          ]
        },
        {
          "name": "prompt",
          "type": "STRING",
          "links": null
        }
      ],
      "properties": {
        "Node name for S&R": "SDVN CLIP Text Encode"
      },
      "widgets_values": [
        "(best quality:1.2), (hyper realistic, raw photo, film gain:1.1), white shirt, portrait girl,in the city, white dress",
        "(text, watermark, 3d, nsfw, 2d)",
        "None",
        "None",
        289593738252285,
        "randomize"
      ]
    },
    {
      "id": 10,
      "type": "Note",
      "pos": [
        69.46601867675781,
        364.55706787109375
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
        "SD text - to - img workflow\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Sub Web: trainlora.vn | shakker.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
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
        638
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 27
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 30
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 31,
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
        1024,
        3.5
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
      20,
      13,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      25,
      11,
      0,
      16,
      0,
      "MODEL"
    ],
    [
      26,
      11,
      1,
      16,
      1,
      "CLIP"
    ],
    [
      27,
      16,
      0,
      13,
      0,
      "MODEL"
    ],
    [
      29,
      16,
      1,
      18,
      0,
      "CLIP"
    ],
    [
      30,
      18,
      0,
      13,
      1,
      "CONDITIONING"
    ],
    [
      31,
      18,
      1,
      13,
      2,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.786535781326515,
      "offset": [
        278.0951102043975,
        198.4159030211076
      ]
    },
    "ue_links": [],
    "node_versions": {
      "comfy-core": "0.3.10",
      "SDVN_Comfy_node": "d5ae4f45bb4c11f02eb407418e9b4e01fa3036de"
    }
  },
  "version": 0.4
}