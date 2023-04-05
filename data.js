var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso-a-piscina-",
      "name": "Ingreso a Piscina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9600321162699625,
        "pitch": 0.015882416547201572,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.0010130407176518474,
          "pitch": 0.1801966323131836,
          "rotation": 0,
          "target": "1-pasillo-exterior-"
        },
        {
          "yaw": -1.457572034501652,
          "pitch": 0.14944280391354603,
          "rotation": 0,
          "target": "2-solarium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.958160277770542,
          "pitch": 0.014010578047788158,
          "title": "Bienvenidos a&nbsp;Altos de la Cañanda",
          "text": "<div>Departamento 2 ambientes, con cochera individual descubierta para 1 auto. jardín.&nbsp;</div><div>Todos los servicios! agua, electricidad, cloacas, y fibra óptica.</div><div>Superficie total: 87M2&nbsp;</div><div><br></div><div>-Seguridad 24 hs</div><div>-Piscina&nbsp;</div><div>-Plaza de Juegos</div><div><br></div><div>Bajas expensas!&nbsp;</div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-pasillo-exterior-",
      "name": "Pasillo exterior ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7875229004532702,
          "pitch": 0.0799811487104094,
          "rotation": 0,
          "target": "5-frente-uf"
        },
        {
          "yaw": 3.1378286588392488,
          "pitch": 0.11343174072519524,
          "rotation": 0,
          "target": "0-ingreso-a-piscina-"
        },
        {
          "yaw": -2.5827638364487626,
          "pitch": 0.097697662218728,
          "rotation": 0,
          "target": "2-solarium"
        },
        {
          "yaw": -0.09861655224553978,
          "pitch": 0.09959111895130235,
          "rotation": 0,
          "target": "4-pasillo-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-solarium",
      "name": "Solarium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.18344000761339352,
        "pitch": -0.04775201055870859,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.22443193131312356,
          "pitch": 0.1435192885098555,
          "rotation": 0,
          "target": "3-piscina-"
        },
        {
          "yaw": 2.9727024976186742,
          "pitch": 0.32469643066706944,
          "rotation": 0,
          "target": "0-ingreso-a-piscina-"
        },
        {
          "yaw": 0.33311821597117053,
          "pitch": 0.06604568359585627,
          "rotation": 0,
          "target": "5-frente-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-piscina-",
      "name": "Piscina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5896607918238201,
          "pitch": 0.04279688542384541,
          "rotation": 0,
          "target": "5-frente-uf"
        },
        {
          "yaw": -3.0823231092229495,
          "pitch": 0.30025825718271193,
          "rotation": 0,
          "target": "2-solarium"
        },
        {
          "yaw": -2.7520547548820566,
          "pitch": 0.1198462670874072,
          "rotation": 0,
          "target": "0-ingreso-a-piscina-"
        },
        {
          "yaw": 2.5206738689221257,
          "pitch": 0.11440063245339438,
          "rotation": 0,
          "target": "1-pasillo-exterior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pasillo-exterior",
      "name": "Pasillo exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.29286092173156497,
          "pitch": 0.016854927376060758,
          "rotation": 4.71238898038469,
          "target": "6-ingreso-a-complejo-deptos-"
        },
        {
          "yaw": -3.1351748621946527,
          "pitch": 0.08575874968104813,
          "rotation": 0,
          "target": "1-pasillo-exterior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-frente-uf",
      "name": "Frente UF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.054962784929003305,
        "pitch": -0.22040491608969504,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.04697446323367416,
          "pitch": 0.07689592912869614,
          "rotation": 0,
          "target": "16-patio-uf"
        },
        {
          "yaw": 1.8649171235271345,
          "pitch": 0.14134077472506945,
          "rotation": 0,
          "target": "1-pasillo-exterior-"
        },
        {
          "yaw": -2.986607288727008,
          "pitch": 0.20270273570669417,
          "rotation": 0,
          "target": "3-piscina-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ingreso-a-complejo-deptos-",
      "name": "Ingreso a complejo deptos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4387676272441876,
          "pitch": 0.05138083184293585,
          "rotation": 0,
          "target": "4-pasillo-exterior"
        },
        {
          "yaw": 0.14197845347093718,
          "pitch": 0.0604584546995941,
          "rotation": 0,
          "target": "7-ingreso-a-complejo-deptos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ingreso-a-complejo-deptos-",
      "name": "Ingreso a complejo deptos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.040961808975374936,
          "pitch": 0.11309295452822887,
          "rotation": 0,
          "target": "8-pasillo-interior"
        },
        {
          "yaw": -3.0313459613212643,
          "pitch": 0.1741712059904934,
          "rotation": 0,
          "target": "6-ingreso-a-complejo-deptos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo-interior",
      "name": "Pasillo interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8089203444449886,
        "pitch": 0.12755345886013103,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.393799003334923,
          "pitch": 0.12159804626636728,
          "rotation": 0,
          "target": "7-ingreso-a-complejo-deptos-"
        },
        {
          "yaw": -2.802951394907911,
          "pitch": 0.16582547376752288,
          "rotation": 0,
          "target": "9-pasillo-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo-interior",
      "name": "Pasillo interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9209917444448301,
        "pitch": 0.14824315325893522,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.95931987488437,
          "pitch": 0.08346790330650578,
          "rotation": 0,
          "target": "10-ingreso-a-depto"
        },
        {
          "yaw": 1.1486017978338054,
          "pitch": 0.10724645381083597,
          "rotation": 0,
          "target": "8-pasillo-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ingreso-a-depto",
      "name": "Ingreso a Depto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.000088437459212,
        "pitch": 0.2512808138259075,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.0841506825458715,
          "pitch": 0.20934457448804977,
          "rotation": 0,
          "target": "11-living---comedor"
        },
        {
          "yaw": 1.7687659628009413,
          "pitch": 0.22622824847364953,
          "rotation": 0,
          "target": "9-pasillo-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-living---comedor",
      "name": "Living - Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.08817591385343704,
        "pitch": 0.20730933908579097,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.2562806957409425,
          "pitch": 0.15140138800463276,
          "rotation": 0,
          "target": "10-ingreso-a-depto"
        },
        {
          "yaw": -1.0772625703709036,
          "pitch": 0.13261884551585013,
          "rotation": 0,
          "target": "12-cocina"
        },
        {
          "yaw": -0.37031310312816323,
          "pitch": 0.21352771535605086,
          "rotation": 0,
          "target": "13-ingreso-bao---habitacin"
        },
        {
          "yaw": 1.4759875609957103,
          "pitch": 0.2139145601066872,
          "rotation": 0,
          "target": "16-patio-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6546097787613903,
        "pitch": 0.4993368089517034,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.3240030653618113,
          "pitch": 0.3426334774777633,
          "rotation": 0,
          "target": "11-living---comedor"
        },
        {
          "yaw": -2.8732722608799204,
          "pitch": 0.11807746418357645,
          "rotation": 1.5707963267948966,
          "target": "10-ingreso-a-depto"
        },
        {
          "yaw": 1.8560343332759555,
          "pitch": 0.20598404678221982,
          "rotation": 0,
          "target": "16-patio-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ingreso-bao---habitacin",
      "name": "Ingreso baño - habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5503129988431112,
        "pitch": 0.2588572070312729,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.6650822215358794,
          "pitch": 0.07823591135125518,
          "rotation": 7.853981633974483,
          "target": "10-ingreso-a-depto"
        },
        {
          "yaw": 3.020509073195921,
          "pitch": 0.3007182929500427,
          "rotation": 0,
          "target": "11-living---comedor"
        },
        {
          "yaw": -2.394408134000331,
          "pitch": 0.4117023876535004,
          "rotation": 1.5707963267948966,
          "target": "12-cocina"
        },
        {
          "yaw": -0.0883415334278439,
          "pitch": 0.21945744118517396,
          "rotation": 0,
          "target": "14-bao"
        },
        {
          "yaw": 0.5093733647533778,
          "pitch": 0.17256985139772496,
          "rotation": 0,
          "target": "15-habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.046285606049840666,
        "pitch": 0.6997167272228673,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.543313062430826,
          "pitch": 0.15160067427877522,
          "rotation": 0,
          "target": "13-ingreso-bao---habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.22083757882377242,
        "pitch": 0.2940416817733862,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.7487685104040924,
          "pitch": 0.1682205219968207,
          "rotation": 0,
          "target": "13-ingreso-bao---habitacin"
        },
        {
          "yaw": 0.7885787192161047,
          "pitch": 0.12236347532029868,
          "rotation": 0,
          "target": "18-patio-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-patio-uf",
      "name": "Patio UF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.03027611967744548,
        "pitch": 0.27896262116962234,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -3.130098851633292,
          "pitch": 0.27721157246967465,
          "rotation": 0,
          "target": "11-living---comedor"
        },
        {
          "yaw": -1.10026478146289,
          "pitch": 0.08890792336124598,
          "rotation": 0,
          "target": "18-patio-uf"
        },
        {
          "yaw": 0.0423725553295391,
          "pitch": 0.18488388984049564,
          "rotation": 0,
          "target": "17-patio-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-patio-uf",
      "name": "Patio UF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6179932031855895,
        "pitch": 0.02010835787380394,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.0344041367130945,
          "pitch": 0.06359288253972117,
          "rotation": 3.141592653589793,
          "target": "3-piscina-"
        },
        {
          "yaw": -3.132874114741588,
          "pitch": 0.10967734591806888,
          "rotation": 0,
          "target": "16-patio-uf"
        },
        {
          "yaw": -2.07011002535382,
          "pitch": 0.05891584190170818,
          "rotation": 4.71238898038469,
          "target": "18-patio-uf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-patio-uf",
      "name": "Patio UF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15445678167000665,
        "pitch": 0.17657826293066492,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.7924522047880718,
          "pitch": 0.09880126324199878,
          "rotation": 0,
          "target": "16-patio-uf"
        },
        {
          "yaw": -0.19483845221966156,
          "pitch": 0.038349777172690835,
          "rotation": 0,
          "target": "2-solarium"
        },
        {
          "yaw": 0.8515148891771762,
          "pitch": 0.4094327979219514,
          "rotation": 0,
          "target": "17-patio-uf"
        },
        {
          "yaw": -3.0921468672078767,
          "pitch": 0.09094544757197198,
          "rotation": 0,
          "target": "15-habitacin"
        },
        {
          "yaw": 2.1223353569140846,
          "pitch": 0.1016561737510262,
          "rotation": 1.5707963267948966,
          "target": "11-living---comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Altos de la cañanda tour virtual ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
