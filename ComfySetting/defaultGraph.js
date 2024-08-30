export const defaultGraph = {
  "last_node_id": 13,
  "last_link_id": 14,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1262,
        82
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 7
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 8
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
      }
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1502,
        82
      ],
      "size": {
        "0": 266.59197998046875,
        "1": 456.1173095703125
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9
        }
      ],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        71,
        86
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            1
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            5,
            12
          ],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            8
          ],
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "Realistic-Vision-v5.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "DPRandomGenerator",
      "pos": [
        426,
        93
      ],
      "size": [
        418.80208738934687,
        199.00480803280664
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            13,
            14
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DPRandomGenerator"
      },
      "widgets_values": [
        "__*/Random__",
        350,
        "randomize",
        "No"
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        642,
        354
      ],
      "size": [
        210,
        54
      ],
      "flags": {
        "collapsed": true
      },
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 12
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 13,
          "widget": {
            "name": "text"
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "1girl, (realistic, best quality, raw photo, film gain:1.1), portrait, in the city, summer day"
      ]
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        538,
        626
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            2
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
      "id": 13,
      "type": "ShowText|pysssss",
      "pos": [
        1800,
        84
      ],
      "size": [
        326.75691980337047,
        194.83996773772583
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "text",
          "type": "STRING",
          "link": 14,
          "widget": {
            "name": "text"
          }
        }
      ],
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": null,
          "shape": 6
        }
      ],
      "properties": {
        "Node name for S&R": "ShowText|pysssss"
      },
      "widgets_values": [
        "",
        "(masterpiece,best quality:1.5),ultra realistic,32k,RAW photo,(high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain,Fish-eye Lens ,(🛕),🪨,🌳,🪸, pretty lady, royal style, silver  accessories, sexy, ( ), deep purple buttoned shirt , braided hair ,(sexy),"
      ]
    },
    {
      "id": 11,
      "type": "Note",
      "pos": [
        73,
        239
      ],
      "size": {
        "0": 310.9923400878906,
        "1": 167.09852600097656
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "#Workflow hỗ trợ đầy đủ cú pháp dynamic prompt tương tự automatic1111\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com\n- Tải model tại Shakker: https://www.shakker.ai/?sourceId=000619"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        428,
        400
      ],
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 5
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "(text, watermark, low quality, 3d, 2d, nsfw:1.1)"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": [
        902,
        82
      ],
      "size": {
        "0": 328.98828125,
        "1": 474
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 1
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 2
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            7
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        0,
        "randomize",
        20,
        8,
        "euler",
        "normal",
        1
      ]
    }
  ],
  "links": [
    [
      1,
      4,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      2,
      5,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      4,
      6,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      5,
      4,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      6,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      7,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      8,
      4,
      2,
      8,
      1,
      "VAE"
    ],
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      12,
      4,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      13,
      12,
      0,
      6,
      1,
      "STRING"
    ],
    [
      14,
      12,
      0,
      13,
      0,
      "STRING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        -7.14191842938817,
        94.87716460104264
      ]
    }
  },
  "version": 0.4
};