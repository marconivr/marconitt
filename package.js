{
	"name": "marconi-tt",
	"main": "server.js"
  "dependencies": {
    "body-parser": {
      "version": "1.15.0",
      "from": "body-parser@latest",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.15.0.tgz",
      "dependencies": {
        "bytes": {
          "version": "2.2.0",
          "from": "bytes@2.2.0",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-2.2.0.tgz"
        },
        "content-type": {
          "version": "1.0.1",
          "from": "content-type@>=1.0.1 <1.1.0",
          "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.1.tgz"
        },
        "debug": {
          "version": "2.2.0",
          "from": "debug@>=2.2.0 <2.3.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.2.0.tgz"
        },
        "depd": {
          "version": "1.1.0",
          "from": "depd@>=1.1.0 <1.2.0",
          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.0.tgz"
        },
        "http-errors": {
          "version": "1.4.0",
          "from": "http-errors@>=1.4.0 <1.5.0",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.4.0.tgz",
          "dependencies": {
            "inherits": {
              "version": "2.0.1",
              "from": "inherits@2.0.1",
              "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz"
            },
            "statuses": {
              "version": "1.2.1",
              "from": "statuses@>=1.2.1 <2.0.0",
              "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.2.1.tgz"
            }
          }
        },
        "iconv-lite": {
          "version": "0.4.13",
          "from": "iconv-lite@0.4.13",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.13.tgz"
        },
        "on-finished": {
          "version": "2.3.0",
          "from": "on-finished@>=2.3.0 <2.4.0",
          "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
          "dependencies": {
            "ee-first": {
              "version": "1.1.1",
              "from": "ee-first@1.1.1",
              "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz"
            }
          }
        },
        "qs": {
          "version": "6.1.0",
          "from": "qs@6.1.0",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.1.0.tgz"
        },
        "raw-body": {
          "version": "2.1.6",
          "from": "raw-body@>=2.1.5 <2.2.0",
          "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.1.6.tgz",
          "dependencies": {
            "bytes": {
              "version": "2.3.0",
              "from": "bytes@2.3.0",
              "resolved": "https://registry.npmjs.org/bytes/-/bytes-2.3.0.tgz"
            },
            "unpipe": {
              "version": "1.0.0",
              "from": "unpipe@1.0.0",
              "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz"
            }
          }
        },
        "type-is": {
          "version": "1.6.12",
          "from": "type-is@>=1.6.11 <1.7.0",
          "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.12.tgz",
          "dependencies": {
            "media-typer": {
              "version": "0.3.0",
              "from": "media-typer@0.3.0",
              "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz"
            },
            "mime-types": {
              "version": "2.1.10",
              "from": "mime-types@>=2.1.10 <2.2.0",
              "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.10.tgz",
              "dependencies": {
                "mime-db": {
                  "version": "1.22.0",
                  "from": "mime-db@>=1.22.0 <1.23.0",
                  "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.22.0.tgz"
                }
              }
            }
          }
        }
      }
    },
    "express": {
      "version": "4.13.4",
      "from": "express@latest",
      "resolved": "https://registry.npmjs.org/express/-/express-4.13.4.tgz",
      "dependencies": {
        "accepts": {
          "version": "1.2.13",
          "from": "accepts@>=1.2.12 <1.3.0",
          "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.2.13.tgz",
          "dependencies": {
            "negotiator": {
              "version": "0.5.3",
              "from": "negotiator@0.5.3",
              "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.5.3.tgz"
            }
          }
        },
        "array-flatten": {
          "version": "1.1.1",
          "from": "array-flatten@1.1.1",
          "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz"
        },
        "content-disposition": {
          "version": "0.5.1",
          "from": "content-disposition@0.5.1",
          "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.1.tgz"
        },
        "cookie": {
          "version": "0.1.5",
          "from": "cookie@0.1.5",
          "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.1.5.tgz"
        },
        "cookie-signature": {
          "version": "1.0.6",
          "from": "cookie-signature@1.0.6",
          "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz"
        },
        "escape-html": {
          "version": "1.0.3",
          "from": "escape-html@>=1.0.3 <1.1.0",
          "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz"
        },
        "etag": {
          "version": "1.7.0",
          "from": "etag@>=1.7.0 <1.8.0",
          "resolved": "https://registry.npmjs.org/etag/-/etag-1.7.0.tgz"
        },
        "qs": {
          "version": "4.0.0",
          "from": "qs@4.0.0",
          "resolved": "https://registry.npmjs.org/qs/-/qs-4.0.0.tgz"
        },
        "finalhandler": {
          "version": "0.4.1",
          "from": "finalhandler@0.4.1",
          "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-0.4.1.tgz"
        },
        "fresh": {
          "version": "0.3.0",
          "from": "fresh@0.3.0",
          "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.3.0.tgz"
        },
        "merge-descriptors": {
          "version": "1.0.1",
          "from": "merge-descriptors@1.0.1",
          "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz"
        },
        "methods": {
          "version": "1.1.2",
          "from": "methods@>=1.1.2 <1.2.0",
          "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz"
        },
        "parseurl": {
          "version": "1.3.1",
          "from": "parseurl@>=1.3.1 <1.4.0",
          "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.1.tgz"
        },
        "path-to-regexp": {
          "version": "0.1.7",
          "from": "path-to-regexp@0.1.7",
          "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz"
        },
        "proxy-addr": {
          "version": "1.0.10",
          "from": "proxy-addr@>=1.0.10 <1.1.0",
          "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-1.0.10.tgz",
          "dependencies": {
            "forwarded": {
              "version": "0.1.0",
              "from": "forwarded@>=0.1.0 <0.2.0",
              "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.0.tgz"
            },
            "ipaddr.js": {
              "version": "1.0.5",
              "from": "ipaddr.js@1.0.5",
              "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.0.5.tgz"
            }
          }
        },
        "range-parser": {
          "version": "1.0.3",
          "from": "range-parser@>=1.0.3 <1.1.0",
          "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.0.3.tgz"
        },
        "send": {
          "version": "0.13.1",
          "from": "send@0.13.1",
          "resolved": "https://registry.npmjs.org/send/-/send-0.13.1.tgz",
          "dependencies": {
            "destroy": {
              "version": "1.0.4",
              "from": "destroy@>=1.0.4 <1.1.0",
              "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz"
            },
            "mime": {
              "version": "1.3.4",
              "from": "mime@1.3.4",
              "resolved": "https://registry.npmjs.org/mime/-/mime-1.3.4.tgz"
            },
            "http-errors": {
              "version": "1.3.1",
              "from": "http-errors@>=1.3.1 <1.4.0",
              "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.3.1.tgz"
            }
          }
        },
        "serve-static": {
          "version": "1.10.2",
          "from": "serve-static@>=1.10.2 <1.11.0",
          "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.10.2.tgz"
        },
        "utils-merge": {
          "version": "1.0.0",
          "from": "utils-merge@1.0.0",
          "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
        },
        "vary": {
          "version": "1.0.1",
          "from": "vary@>=1.0.1 <1.1.0",
          "resolved": "https://registry.npmjs.org/vary/-/vary-1.0.1.tgz"
        }
      }
    },
    "jsonwebtoken": {
      "version": "5.7.0",
      "from": "jsonwebtoken@latest",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-5.7.0.tgz",
      "dependencies": {
        "jws": {
          "version": "3.1.3",
          "from": "jws@>=3.0.0 <4.0.0",
          "resolved": "https://registry.npmjs.org/jws/-/jws-3.1.3.tgz",
          "dependencies": {
            "base64url": {
              "version": "1.0.6",
              "from": "base64url@>=1.0.4 <1.1.0",
              "resolved": "https://registry.npmjs.org/base64url/-/base64url-1.0.6.tgz",
              "dependencies": {
                "concat-stream": {
                  "version": "1.4.10",
                  "from": "concat-stream@>=1.4.7 <1.5.0",
                  "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.4.10.tgz",
                  "dependencies": {
                    "readable-stream": {
                      "version": "1.1.14",
                      "from": "readable-stream@>=1.1.9 <1.2.0",
                      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz"
                    },
                    "typedarray": {
                      "version": "0.0.6",
                      "from": "typedarray@>=0.0.5 <0.1.0",
                      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz"
                    }
                  }
                },
                "meow": {
                  "version": "2.0.0",
                  "from": "meow@>=2.0.0 <2.1.0",
                  "resolved": "https://registry.npmjs.org/meow/-/meow-2.0.0.tgz",
                  "dependencies": {
                    "camelcase-keys": {
                      "version": "1.0.0",
                      "from": "camelcase-keys@>=1.0.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-1.0.0.tgz",
                      "dependencies": {
                        "camelcase": {
                          "version": "1.2.1",
                          "from": "camelcase@>=1.0.1 <2.0.0",
                          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.2.1.tgz"
                        },
                        "map-obj": {
                          "version": "1.0.1",
                          "from": "map-obj@>=1.0.0 <2.0.0",
                          "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz"
                        }
                      }
                    },
                    "indent-string": {
                      "version": "1.2.2",
                      "from": "indent-string@>=1.1.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-1.2.2.tgz",
                      "dependencies": {
                        "get-stdin": {
                          "version": "4.0.1",
                          "from": "get-stdin@>=4.0.1 <5.0.0",
                          "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz"
                        },
                        "repeating": {
                          "version": "1.1.3",
                          "from": "repeating@>=1.1.0 <2.0.0",
                          "resolved": "https://registry.npmjs.org/repeating/-/repeating-1.1.3.tgz",
                          "dependencies": {
                            "is-finite": {
                              "version": "1.0.1",
                              "from": "is-finite@>=1.0.0 <2.0.0",
                              "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.0.1.tgz",
                              "dependencies": {
                                "number-is-nan": {
                                  "version": "1.0.0",
                                  "from": "number-is-nan@>=1.0.0 <2.0.0",
                                  "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.0.tgz"
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "minimist": {
                      "version": "1.2.0",
                      "from": "minimist@>=1.1.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz"
                    },
                    "object-assign": {
                      "version": "1.0.0",
                      "from": "object-assign@>=1.0.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-1.0.0.tgz"
                    }
                  }
                }
              }
            },
            "jwa": {
              "version": "1.1.3",
              "from": "jwa@>=1.1.2 <2.0.0",
              "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.1.3.tgz",
              "dependencies": {
                "buffer-equal-constant-time": {
                  "version": "1.0.1",
                  "from": "buffer-equal-constant-time@>=1.0.1 <2.0.0",
                  "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz"
                },
                "ecdsa-sig-formatter": {
                  "version": "1.0.5",
                  "from": "ecdsa-sig-formatter@>=1.0.0 <2.0.0",
                  "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.5.tgz",
                  "dependencies": {
                    "base64-url": {
                      "version": "1.2.2",
                      "from": "base64-url@>=1.2.1 <2.0.0",
                      "resolved": "https://registry.npmjs.org/base64-url/-/base64-url-1.2.2.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "ms": {
          "version": "0.7.1",
          "from": "ms@0.7.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.1.tgz"
        },
        "xtend": {
          "version": "4.0.1",
          "from": "xtend@>=4.0.1 <5.0.0",
          "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz"
        }
      }
    },
    "mongoose": {
      "version": "4.4.12",
      "from": "mongoose@latest",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-4.4.12.tgz",
      "dependencies": {
        "async": {
          "version": "1.5.2",
          "from": "async@1.5.2",
          "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz"
        },
        "bson": {
          "version": "0.4.23",
          "from": "bson@>=0.4.21 <0.5.0",
          "resolved": "https://registry.npmjs.org/bson/-/bson-0.4.23.tgz"
        },
        "hooks-fixed": {
          "version": "1.1.0",
          "from": "hooks-fixed@1.1.0",
          "resolved": "https://registry.npmjs.org/hooks-fixed/-/hooks-fixed-1.1.0.tgz"
        },
        "kareem": {
          "version": "1.0.1",
          "from": "kareem@1.0.1",
          "resolved": "https://registry.npmjs.org/kareem/-/kareem-1.0.1.tgz"
        },
        "mongodb": {
          "version": "2.1.16",
          "from": "mongodb@2.1.16",
          "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-2.1.16.tgz",
          "dependencies": {
            "es6-promise": {
              "version": "3.0.2",
              "from": "es6-promise@3.0.2",
              "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-3.0.2.tgz"
            },
            "mongodb-core": {
              "version": "1.3.16",
              "from": "mongodb-core@1.3.16",
              "resolved": "https://registry.npmjs.org/mongodb-core/-/mongodb-core-1.3.16.tgz",
              "dependencies": {
                "require_optional": {
                  "version": "1.0.0",
                  "from": "require_optional@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.0.tgz",
                  "dependencies": {
                    "resolve-from": {
                      "version": "2.0.0",
                      "from": "resolve-from@>=2.0.0 <3.0.0",
                      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz"
                    },
                    "semver": {
                      "version": "5.1.0",
                      "from": "semver@>=5.1.0 <6.0.0",
                      "resolved": "https://registry.npmjs.org/semver/-/semver-5.1.0.tgz"
                    }
                  }
                }
              }
            },
            "readable-stream": {
              "version": "1.0.31",
              "from": "readable-stream@1.0.31",
              "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.31.tgz",
              "dependencies": {
                "core-util-is": {
                  "version": "1.0.2",
                  "from": "core-util-is@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz"
                },
                "isarray": {
                  "version": "0.0.1",
                  "from": "isarray@0.0.1",
                  "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                },
                "string_decoder": {
                  "version": "0.10.31",
                  "from": "string_decoder@>=0.10.0 <0.11.0",
                  "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                }
              }
            }
          }
        },
        "mpath": {
          "version": "0.2.1",
          "from": "mpath@0.2.1",
          "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.2.1.tgz"
        },
        "mpromise": {
          "version": "0.5.5",
          "from": "mpromise@0.5.5",
          "resolved": "https://registry.npmjs.org/mpromise/-/mpromise-0.5.5.tgz"
        },
        "mquery": {
          "version": "1.10.0",
          "from": "mquery@1.10.0",
          "resolved": "https://registry.npmjs.org/mquery/-/mquery-1.10.0.tgz",
          "dependencies": {
            "bluebird": {
              "version": "2.10.2",
              "from": "bluebird@2.10.2",
              "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.10.2.tgz"
            },
            "sliced": {
              "version": "0.0.5",
              "from": "sliced@0.0.5",
              "resolved": "https://registry.npmjs.org/sliced/-/sliced-0.0.5.tgz"
            }
          }
        },
        "muri": {
          "version": "1.1.0",
          "from": "muri@1.1.0",
          "resolved": "https://registry.npmjs.org/muri/-/muri-1.1.0.tgz"
        },
        "regexp-clone": {
          "version": "0.0.1",
          "from": "regexp-clone@0.0.1",
          "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-0.0.1.tgz"
        },
        "sliced": {
          "version": "1.0.1",
          "from": "sliced@1.0.1",
          "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz"
        }
      }
    },
    "morgan": {
      "version": "1.7.0",
      "from": "morgan@latest",
      "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.7.0.tgz",
      "dependencies": {
        "basic-auth": {
          "version": "1.0.3",
          "from": "basic-auth@>=1.0.3 <1.1.0",
          "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-1.0.3.tgz"
        },
        "on-headers": {
          "version": "1.0.1",
          "from": "on-headers@>=1.0.1 <1.1.0",
          "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.1.tgz"
        }
      }
    }
  }
}
