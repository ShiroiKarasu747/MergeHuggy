["#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _RendererColor;\nuniform \tmediump vec2 _Flip;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0.xy = in_POSITION0.xy * _Flip.xy;\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0 = in_COLOR0 * _Color;\n    u_xlat0 = u_xlat0 * _RendererColor;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec4 u_xlat10_0;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat16_0 = u_xlat10_0 * vs_COLOR0;\n    SV_Target0.xyz = u_xlat16_0.www * u_xlat16_0.xyz;\n    SV_Target0.w = u_xlat16_0.w;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 _ScreenParams;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _RendererColor;\nuniform \tmediump vec2 _Flip;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nfloat roundEven(float x) { float y = floor(x + 0.5); return (y - x == 0.5) ? floor(0.5*y) * 2.0 : y; }\nvec2 roundEven(vec2 a) { a.x = roundEven(a.x); a.y = roundEven(a.y); return a; }\nvec3 roundEven(vec3 a) { a.x = roundEven(a.x); a.y = roundEven(a.y); a.z = roundEven(a.z); return a; }\nvec4 roundEven(vec4 a) { a.x = roundEven(a.x); a.y = roundEven(a.y); a.z = roundEven(a.z); a.w = roundEven(a.w); return a; }\n\nvoid main()\n{\n    u_xlat0.xy = in_POSITION0.xy * _Flip.xy;\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    u_xlat0 = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0.xy = u_xlat0.xy / u_xlat0.ww;\n    u_xlat1.xy = _ScreenParams.xy * vec2(0.5, 0.5);\n    u_xlat0.xy = u_xlat0.xy * u_xlat1.xy;\n    u_xlat0.xy = roundEven(u_xlat0.xy);\n    u_xlat0.xy = u_xlat0.xy / u_xlat1.xy;\n    gl_Position.xy = u_xlat0.ww * u_xlat0.xy;\n    gl_Position.zw = u_xlat0.zw;\n    u_xlat0 = in_COLOR0 * _Color;\n    u_xlat0 = u_xlat0 * _RendererColor;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec4 u_xlat10_0;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat16_0 = u_xlat10_0 * vs_COLOR0;\n    SV_Target0.xyz = u_xlat16_0.www * u_xlat16_0.xyz;\n    SV_Target0.w = u_xlat16_0.w;\n    return;\n}\n\n"]