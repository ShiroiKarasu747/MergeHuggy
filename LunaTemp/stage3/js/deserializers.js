var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7260 = root || request.c( 'UnityEngine.JointSpring' )
  var i7261 = data
  i7260.spring = i7261[0]
  i7260.damper = i7261[1]
  i7260.targetPosition = i7261[2]
  return i7260
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7262 = root || request.c( 'UnityEngine.JointMotor' )
  var i7263 = data
  i7262.m_TargetVelocity = i7263[0]
  i7262.m_Force = i7263[1]
  i7262.m_FreeSpin = i7263[2]
  return i7262
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7264 = root || request.c( 'UnityEngine.JointLimits' )
  var i7265 = data
  i7264.m_Min = i7265[0]
  i7264.m_Max = i7265[1]
  i7264.m_Bounciness = i7265[2]
  i7264.m_BounceMinVelocity = i7265[3]
  i7264.m_ContactDistance = i7265[4]
  i7264.minBounce = i7265[5]
  i7264.maxBounce = i7265[6]
  return i7264
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7266 = root || request.c( 'UnityEngine.JointDrive' )
  var i7267 = data
  i7266.m_PositionSpring = i7267[0]
  i7266.m_PositionDamper = i7267[1]
  i7266.m_MaximumForce = i7267[2]
  return i7266
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7268 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7269 = data
  i7268.m_Spring = i7269[0]
  i7268.m_Damper = i7269[1]
  return i7268
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7270 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7271 = data
  i7270.m_Limit = i7271[0]
  i7270.m_Bounciness = i7271[1]
  i7270.m_ContactDistance = i7271[2]
  return i7270
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7272 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7273 = data
  i7272.m_ExtremumSlip = i7273[0]
  i7272.m_ExtremumValue = i7273[1]
  i7272.m_AsymptoteSlip = i7273[2]
  i7272.m_AsymptoteValue = i7273[3]
  i7272.m_Stiffness = i7273[4]
  return i7272
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7274 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7275 = data
  i7274.m_LowerAngle = i7275[0]
  i7274.m_UpperAngle = i7275[1]
  return i7274
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7276 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7277 = data
  i7276.m_MotorSpeed = i7277[0]
  i7276.m_MaximumMotorTorque = i7277[1]
  return i7276
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7278 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7279 = data
  i7278.m_DampingRatio = i7279[0]
  i7278.m_Frequency = i7279[1]
  i7278.m_Angle = i7279[2]
  return i7278
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7280 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7281 = data
  i7280.m_LowerTranslation = i7281[0]
  i7280.m_UpperTranslation = i7281[1]
  return i7280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7282 = root || new pc.UnityMaterial()
  var i7283 = data
  i7282.name = i7283[0]
  request.r(i7283[1], i7283[2], 0, i7282, 'shader')
  i7282.renderQueue = i7283[3]
  i7282.enableInstancing = !!i7283[4]
  var i7285 = i7283[5]
  var i7284 = []
  for(var i = 0; i < i7285.length; i += 1) {
    i7284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7285[i + 0]) );
  }
  i7282.floatParameters = i7284
  var i7287 = i7283[6]
  var i7286 = []
  for(var i = 0; i < i7287.length; i += 1) {
    i7286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7287[i + 0]) );
  }
  i7282.colorParameters = i7286
  var i7289 = i7283[7]
  var i7288 = []
  for(var i = 0; i < i7289.length; i += 1) {
    i7288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7289[i + 0]) );
  }
  i7282.vectorParameters = i7288
  var i7291 = i7283[8]
  var i7290 = []
  for(var i = 0; i < i7291.length; i += 1) {
    i7290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7291[i + 0]) );
  }
  i7282.textureParameters = i7290
  var i7293 = i7283[9]
  var i7292 = []
  for(var i = 0; i < i7293.length; i += 1) {
    i7292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7293[i + 0]) );
  }
  i7282.materialFlags = i7292
  return i7282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7297 = data
  i7296.name = i7297[0]
  i7296.value = i7297[1]
  return i7296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7301 = data
  i7300.name = i7301[0]
  i7300.value = new pc.Color(i7301[1], i7301[2], i7301[3], i7301[4])
  return i7300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7305 = data
  i7304.name = i7305[0]
  i7304.value = new pc.Vec4( i7305[1], i7305[2], i7305[3], i7305[4] )
  return i7304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7309 = data
  i7308.name = i7309[0]
  request.r(i7309[1], i7309[2], 0, i7308, 'value')
  return i7308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7313 = data
  i7312.name = i7313[0]
  i7312.enabled = !!i7313[1]
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7315 = data
  i7314.name = i7315[0]
  i7314.halfPrecision = !!i7315[1]
  i7314.vertexCount = i7315[2]
  i7314.aabb = i7315[3]
  var i7317 = i7315[4]
  var i7316 = []
  for(var i = 0; i < i7317.length; i += 1) {
    i7316.push( !!i7317[i + 0] );
  }
  i7314.streams = i7316
  i7314.vertices = i7315[5]
  var i7319 = i7315[6]
  var i7318 = []
  for(var i = 0; i < i7319.length; i += 1) {
    i7318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7319[i + 0]) );
  }
  i7314.subMeshes = i7318
  var i7321 = i7315[7]
  var i7320 = []
  for(var i = 0; i < i7321.length; i += 16) {
    i7320.push( new pc.Mat4().setData(i7321[i + 0], i7321[i + 1], i7321[i + 2], i7321[i + 3],  i7321[i + 4], i7321[i + 5], i7321[i + 6], i7321[i + 7],  i7321[i + 8], i7321[i + 9], i7321[i + 10], i7321[i + 11],  i7321[i + 12], i7321[i + 13], i7321[i + 14], i7321[i + 15]) );
  }
  i7314.bindposes = i7320
  var i7323 = i7315[8]
  var i7322 = []
  for(var i = 0; i < i7323.length; i += 1) {
    i7322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7323[i + 0]) );
  }
  i7314.blendShapes = i7322
  return i7314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7329 = data
  i7328.triangles = i7329[0]
  return i7328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7335 = data
  i7334.name = i7335[0]
  var i7337 = i7335[1]
  var i7336 = []
  for(var i = 0; i < i7337.length; i += 1) {
    i7336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7337[i + 0]) );
  }
  i7334.frames = i7336
  return i7334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7339 = data
  i7338.name = i7339[0]
  i7338.width = i7339[1]
  i7338.height = i7339[2]
  i7338.mipmapCount = i7339[3]
  i7338.anisoLevel = i7339[4]
  i7338.filterMode = i7339[5]
  i7338.hdr = !!i7339[6]
  i7338.format = i7339[7]
  i7338.wrapMode = i7339[8]
  i7338.alphaIsTransparency = !!i7339[9]
  i7338.alphaSource = i7339[10]
  return i7338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7341 = data
  i7340.position = new pc.Vec3( i7341[0], i7341[1], i7341[2] )
  i7340.scale = new pc.Vec3( i7341[3], i7341[4], i7341[5] )
  i7340.rotation = new pc.Quat(i7341[6], i7341[7], i7341[8], i7341[9])
  return i7340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7343 = data
  request.r(i7343[0], i7343[1], 0, i7342, 'animatorController')
  i7342.updateMode = i7343[2]
  var i7345 = i7343[3]
  var i7344 = []
  for(var i = 0; i < i7345.length; i += 2) {
  request.r(i7345[i + 0], i7345[i + 1], 2, i7344, '')
  }
  i7342.humanBones = i7344
  i7342.enabled = !!i7343[4]
  return i7342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7349 = data
  i7348.center = new pc.Vec3( i7349[0], i7349[1], i7349[2] )
  i7348.size = new pc.Vec3( i7349[3], i7349[4], i7349[5] )
  i7348.enabled = !!i7349[6]
  i7348.isTrigger = !!i7349[7]
  request.r(i7349[8], i7349[9], 0, i7348, 'material')
  return i7348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i7350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i7351 = data
  i7350.mass = i7351[0]
  i7350.drag = i7351[1]
  i7350.angularDrag = i7351[2]
  i7350.useGravity = !!i7351[3]
  i7350.isKinematic = !!i7351[4]
  i7350.constraints = i7351[5]
  i7350.maxAngularVelocity = i7351[6]
  i7350.collisionDetectionMode = i7351[7]
  i7350.interpolation = i7351[8]
  return i7350
}

Deserializers["HumanCraft"] = function (request, data, root) {
  var i7352 = root || request.c( 'HumanCraft' )
  var i7353 = data
  request.r(i7353[0], i7353[1], 0, i7352, 'colliderAttack')
  request.r(i7353[2], i7353[3], 0, i7352, 'hand')
  request.r(i7353[4], i7353[5], 0, i7352, 'head')
  request.r(i7353[6], i7353[7], 0, i7352, 'circle')
  request.r(i7353[8], i7353[9], 0, i7352, 'characterUp')
  request.r(i7353[10], i7353[11], 0, i7352, 'fxSmoke')
  i7352.charScale = new pc.Vec3( i7353[12], i7353[13], i7353[14] )
  i7352.index = i7353[15]
  i7352.isChoosed = !!i7353[16]
  request.r(i7353[17], i7353[18], 0, i7352, 'meshRenderer')
  i7352.isTargetEnemy = !!i7353[19]
  request.r(i7353[20], i7353[21], 0, i7352, 'animator')
  return i7352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i7354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i7355 = data
  i7354.enabled = !!i7355[0]
  request.r(i7355[1], i7355[2], 0, i7354, 'sharedMaterial')
  var i7357 = i7355[3]
  var i7356 = []
  for(var i = 0; i < i7357.length; i += 2) {
  request.r(i7357[i + 0], i7357[i + 1], 2, i7356, '')
  }
  i7354.sharedMaterials = i7356
  i7354.receiveShadows = !!i7355[4]
  i7354.shadowCastingMode = i7355[5]
  i7354.sortingLayerID = i7355[6]
  i7354.sortingOrder = i7355[7]
  i7354.lightmapIndex = i7355[8]
  i7354.lightmapSceneIndex = i7355[9]
  i7354.lightmapScaleOffset = new pc.Vec4( i7355[10], i7355[11], i7355[12], i7355[13] )
  i7354.lightProbeUsage = i7355[14]
  i7354.reflectionProbeUsage = i7355[15]
  request.r(i7355[16], i7355[17], 0, i7354, 'sharedMesh')
  var i7359 = i7355[18]
  var i7358 = []
  for(var i = 0; i < i7359.length; i += 2) {
  request.r(i7359[i + 0], i7359[i + 1], 2, i7358, '')
  }
  i7354.bones = i7358
  i7354.updateWhenOffscreen = !!i7355[19]
  i7354.localBounds = i7355[20]
  request.r(i7355[21], i7355[22], 0, i7354, 'rootBone')
  var i7361 = i7355[23]
  var i7360 = []
  for(var i = 0; i < i7361.length; i += 1) {
    i7360.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i7361[i + 0]) );
  }
  i7354.blendShapesWeights = i7360
  return i7354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i7366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i7367 = data
  i7366.weight = i7367[0]
  return i7366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7369 = data
  i7368.name = i7369[0]
  i7368.tag = i7369[1]
  i7368.enabled = !!i7369[2]
  i7368.isStatic = !!i7369[3]
  i7368.layer = i7369[4]
  return i7368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7371 = data
  request.r(i7371[0], i7371[1], 0, i7370, 'sharedMesh')
  return i7370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7373 = data
  request.r(i7373[0], i7373[1], 0, i7372, 'additionalVertexStreams')
  i7372.enabled = !!i7373[2]
  request.r(i7373[3], i7373[4], 0, i7372, 'sharedMaterial')
  var i7375 = i7373[5]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 2) {
  request.r(i7375[i + 0], i7375[i + 1], 2, i7374, '')
  }
  i7372.sharedMaterials = i7374
  i7372.receiveShadows = !!i7373[6]
  i7372.shadowCastingMode = i7373[7]
  i7372.sortingLayerID = i7373[8]
  i7372.sortingOrder = i7373[9]
  i7372.lightmapIndex = i7373[10]
  i7372.lightmapSceneIndex = i7373[11]
  i7372.lightmapScaleOffset = new pc.Vec4( i7373[12], i7373[13], i7373[14], i7373[15] )
  i7372.lightProbeUsage = i7373[16]
  i7372.reflectionProbeUsage = i7373[17]
  return i7372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i7376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i7377 = data
  i7376.enabled = !!i7377[0]
  request.r(i7377[1], i7377[2], 0, i7376, 'sharedMaterial')
  var i7379 = i7377[3]
  var i7378 = []
  for(var i = 0; i < i7379.length; i += 2) {
  request.r(i7379[i + 0], i7379[i + 1], 2, i7378, '')
  }
  i7376.sharedMaterials = i7378
  i7376.receiveShadows = !!i7377[4]
  i7376.shadowCastingMode = i7377[5]
  i7376.sortingLayerID = i7377[6]
  i7376.sortingOrder = i7377[7]
  i7376.lightmapIndex = i7377[8]
  i7376.lightmapSceneIndex = i7377[9]
  i7376.lightmapScaleOffset = new pc.Vec4( i7377[10], i7377[11], i7377[12], i7377[13] )
  i7376.lightProbeUsage = i7377[14]
  i7376.reflectionProbeUsage = i7377[15]
  i7376.color = new pc.Color(i7377[16], i7377[17], i7377[18], i7377[19])
  request.r(i7377[20], i7377[21], 0, i7376, 'sprite')
  i7376.flipX = !!i7377[22]
  i7376.flipY = !!i7377[23]
  i7376.drawMode = i7377[24]
  i7376.size = new pc.Vec2( i7377[25], i7377[26] )
  i7376.tileMode = i7377[27]
  i7376.adaptiveModeThreshold = i7377[28]
  i7376.maskInteraction = i7377[29]
  i7376.spriteSortPoint = i7377[30]
  return i7376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7381 = data
  i7380.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7381[0], i7380.main)
  i7380.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7381[1], i7380.colorBySpeed)
  i7380.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7381[2], i7380.colorOverLifetime)
  i7380.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7381[3], i7380.emission)
  i7380.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7381[4], i7380.rotationBySpeed)
  i7380.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7381[5], i7380.rotationOverLifetime)
  i7380.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7381[6], i7380.shape)
  i7380.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7381[7], i7380.sizeBySpeed)
  i7380.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7381[8], i7380.sizeOverLifetime)
  i7380.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7381[9], i7380.textureSheetAnimation)
  i7380.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7381[10], i7380.velocityOverLifetime)
  i7380.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7381[11], i7380.noise)
  i7380.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7381[12], i7380.inheritVelocity)
  i7380.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7381[13], i7380.forceOverLifetime)
  i7380.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7381[14], i7380.limitVelocityOverLifetime)
  i7380.useAutoRandomSeed = !!i7381[15]
  i7380.randomSeed = i7381[16]
  return i7380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7382 = root || new pc.ParticleSystemMain()
  var i7383 = data
  i7382.duration = i7383[0]
  i7382.loop = !!i7383[1]
  i7382.prewarm = !!i7383[2]
  i7382.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[3], i7382.startDelay)
  i7382.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[4], i7382.startLifetime)
  i7382.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[5], i7382.startSpeed)
  i7382.startSize3D = !!i7383[6]
  i7382.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[7], i7382.startSizeX)
  i7382.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[8], i7382.startSizeY)
  i7382.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[9], i7382.startSizeZ)
  i7382.startRotation3D = !!i7383[10]
  i7382.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[11], i7382.startRotationX)
  i7382.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[12], i7382.startRotationY)
  i7382.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[13], i7382.startRotationZ)
  i7382.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7383[14], i7382.startColor)
  i7382.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7383[15], i7382.gravityModifier)
  i7382.simulationSpace = i7383[16]
  request.r(i7383[17], i7383[18], 0, i7382, 'customSimulationSpace')
  i7382.simulationSpeed = i7383[19]
  i7382.useUnscaledTime = !!i7383[20]
  i7382.scalingMode = i7383[21]
  i7382.playOnAwake = !!i7383[22]
  i7382.maxParticles = i7383[23]
  i7382.emitterVelocityMode = i7383[24]
  return i7382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7384 = root || new pc.MinMaxCurve()
  var i7385 = data
  i7384.mode = i7385[0]
  i7384.curveMin = new pc.AnimationCurve( { keys_flow: i7385[1] } )
  i7384.curveMax = new pc.AnimationCurve( { keys_flow: i7385[2] } )
  i7384.curveMultiplier = i7385[3]
  i7384.constantMin = i7385[4]
  i7384.constantMax = i7385[5]
  return i7384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7386 = root || new pc.MinMaxGradient()
  var i7387 = data
  i7386.mode = i7387[0]
  i7386.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7387[1], i7386.gradientMin)
  i7386.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7387[2], i7386.gradientMax)
  i7386.colorMin = new pc.Color(i7387[3], i7387[4], i7387[5], i7387[6])
  i7386.colorMax = new pc.Color(i7387[7], i7387[8], i7387[9], i7387[10])
  return i7386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7389 = data
  i7388.mode = i7389[0]
  var i7391 = i7389[1]
  var i7390 = []
  for(var i = 0; i < i7391.length; i += 1) {
    i7390.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7391[i + 0]) );
  }
  i7388.colorKeys = i7390
  var i7393 = i7389[2]
  var i7392 = []
  for(var i = 0; i < i7393.length; i += 1) {
    i7392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7393[i + 0]) );
  }
  i7388.alphaKeys = i7392
  return i7388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7394 = root || new pc.ParticleSystemColorBySpeed()
  var i7395 = data
  i7394.enabled = !!i7395[0]
  i7394.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7395[1], i7394.color)
  i7394.range = new pc.Vec2( i7395[2], i7395[3] )
  return i7394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7399 = data
  i7398.color = new pc.Color(i7399[0], i7399[1], i7399[2], i7399[3])
  i7398.time = i7399[4]
  return i7398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7403 = data
  i7402.alpha = i7403[0]
  i7402.time = i7403[1]
  return i7402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7404 = root || new pc.ParticleSystemColorOverLifetime()
  var i7405 = data
  i7404.enabled = !!i7405[0]
  i7404.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7405[1], i7404.color)
  return i7404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7406 = root || new pc.ParticleSystemEmitter()
  var i7407 = data
  i7406.enabled = !!i7407[0]
  i7406.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7407[1], i7406.rateOverTime)
  i7406.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7407[2], i7406.rateOverDistance)
  var i7409 = i7407[3]
  var i7408 = []
  for(var i = 0; i < i7409.length; i += 1) {
    i7408.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7409[i + 0]) );
  }
  i7406.bursts = i7408
  return i7406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7412 = root || new pc.ParticleSystemBurst()
  var i7413 = data
  i7412.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7413[0], i7412.count)
  i7412.cycleCount = i7413[1]
  i7412.minCount = i7413[2]
  i7412.maxCount = i7413[3]
  i7412.repeatInterval = i7413[4]
  i7412.time = i7413[5]
  return i7412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7414 = root || new pc.ParticleSystemRotationBySpeed()
  var i7415 = data
  i7414.enabled = !!i7415[0]
  i7414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[1], i7414.x)
  i7414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[2], i7414.y)
  i7414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[3], i7414.z)
  i7414.separateAxes = !!i7415[4]
  i7414.range = new pc.Vec2( i7415[5], i7415[6] )
  return i7414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7416 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7417 = data
  i7416.enabled = !!i7417[0]
  i7416.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[1], i7416.x)
  i7416.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[2], i7416.y)
  i7416.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[3], i7416.z)
  i7416.separateAxes = !!i7417[4]
  return i7416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7418 = root || new pc.ParticleSystemShape()
  var i7419 = data
  i7418.enabled = !!i7419[0]
  i7418.shapeType = i7419[1]
  i7418.randomDirectionAmount = i7419[2]
  i7418.sphericalDirectionAmount = i7419[3]
  i7418.randomPositionAmount = i7419[4]
  i7418.alignToDirection = !!i7419[5]
  i7418.radius = i7419[6]
  i7418.radiusMode = i7419[7]
  i7418.radiusSpread = i7419[8]
  i7418.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7419[9], i7418.radiusSpeed)
  i7418.radiusThickness = i7419[10]
  i7418.angle = i7419[11]
  i7418.length = i7419[12]
  i7418.boxThickness = new pc.Vec3( i7419[13], i7419[14], i7419[15] )
  i7418.meshShapeType = i7419[16]
  request.r(i7419[17], i7419[18], 0, i7418, 'mesh')
  request.r(i7419[19], i7419[20], 0, i7418, 'meshRenderer')
  request.r(i7419[21], i7419[22], 0, i7418, 'skinnedMeshRenderer')
  i7418.useMeshMaterialIndex = !!i7419[23]
  i7418.meshMaterialIndex = i7419[24]
  i7418.useMeshColors = !!i7419[25]
  i7418.normalOffset = i7419[26]
  i7418.arc = i7419[27]
  i7418.arcMode = i7419[28]
  i7418.arcSpread = i7419[29]
  i7418.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7419[30], i7418.arcSpeed)
  i7418.donutRadius = i7419[31]
  i7418.position = new pc.Vec3( i7419[32], i7419[33], i7419[34] )
  i7418.rotation = new pc.Vec3( i7419[35], i7419[36], i7419[37] )
  i7418.scale = new pc.Vec3( i7419[38], i7419[39], i7419[40] )
  return i7418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7420 = root || new pc.ParticleSystemSizeBySpeed()
  var i7421 = data
  i7420.enabled = !!i7421[0]
  i7420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[1], i7420.x)
  i7420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[2], i7420.y)
  i7420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[3], i7420.z)
  i7420.separateAxes = !!i7421[4]
  i7420.range = new pc.Vec2( i7421[5], i7421[6] )
  return i7420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7422 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7423 = data
  i7422.enabled = !!i7423[0]
  i7422.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[1], i7422.x)
  i7422.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[2], i7422.y)
  i7422.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[3], i7422.z)
  i7422.separateAxes = !!i7423[4]
  return i7422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7424 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7425 = data
  i7424.enabled = !!i7425[0]
  i7424.mode = i7425[1]
  i7424.animation = i7425[2]
  i7424.numTilesX = i7425[3]
  i7424.numTilesY = i7425[4]
  i7424.useRandomRow = !!i7425[5]
  i7424.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7425[6], i7424.frameOverTime)
  i7424.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7425[7], i7424.startFrame)
  i7424.cycleCount = i7425[8]
  i7424.rowIndex = i7425[9]
  i7424.flipU = i7425[10]
  i7424.flipV = i7425[11]
  i7424.spriteCount = i7425[12]
  var i7427 = i7425[13]
  var i7426 = []
  for(var i = 0; i < i7427.length; i += 2) {
  request.r(i7427[i + 0], i7427[i + 1], 2, i7426, '')
  }
  i7424.sprites = i7426
  return i7424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7430 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7431 = data
  i7430.enabled = !!i7431[0]
  i7430.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7431[1], i7430.x)
  i7430.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7431[2], i7430.y)
  i7430.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7431[3], i7430.z)
  i7430.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7431[4], i7430.speedModifier)
  i7430.space = i7431[5]
  return i7430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7432 = root || new pc.ParticleSystemNoise()
  var i7433 = data
  i7432.enabled = !!i7433[0]
  i7432.separateAxes = !!i7433[1]
  i7432.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[2], i7432.strengthX)
  i7432.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[3], i7432.strengthY)
  i7432.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[4], i7432.strengthZ)
  i7432.frequency = i7433[5]
  i7432.damping = !!i7433[6]
  i7432.octaveCount = i7433[7]
  i7432.octaveMultiplier = i7433[8]
  i7432.octaveScale = i7433[9]
  i7432.quality = i7433[10]
  i7432.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[11], i7432.scrollSpeed)
  i7432.scrollSpeedMultiplier = i7433[12]
  i7432.remapEnabled = !!i7433[13]
  i7432.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[14], i7432.remapX)
  i7432.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[15], i7432.remapY)
  i7432.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[16], i7432.remapZ)
  i7432.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[17], i7432.positionAmount)
  i7432.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[18], i7432.rotationAmount)
  i7432.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7433[19], i7432.sizeAmount)
  return i7432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7434 = root || new pc.ParticleSystemInheritVelocity()
  var i7435 = data
  i7434.enabled = !!i7435[0]
  i7434.mode = i7435[1]
  i7434.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7435[2], i7434.curve)
  return i7434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7436 = root || new pc.ParticleSystemForceOverLifetime()
  var i7437 = data
  i7436.enabled = !!i7437[0]
  i7436.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7437[1], i7436.x)
  i7436.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7437[2], i7436.y)
  i7436.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7437[3], i7436.z)
  i7436.space = i7437[4]
  i7436.randomized = !!i7437[5]
  return i7436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7438 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7439 = data
  i7438.enabled = !!i7439[0]
  i7438.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7439[1], i7438.limitX)
  i7438.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7439[2], i7438.limitY)
  i7438.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7439[3], i7438.limitZ)
  i7438.dampen = i7439[4]
  i7438.separateAxes = !!i7439[5]
  i7438.space = i7439[6]
  i7438.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7439[7], i7438.drag)
  i7438.multiplyDragByParticleSize = !!i7439[8]
  i7438.multiplyDragByParticleVelocity = !!i7439[9]
  return i7438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7441 = data
  i7440.enabled = !!i7441[0]
  request.r(i7441[1], i7441[2], 0, i7440, 'sharedMaterial')
  var i7443 = i7441[3]
  var i7442 = []
  for(var i = 0; i < i7443.length; i += 2) {
  request.r(i7443[i + 0], i7443[i + 1], 2, i7442, '')
  }
  i7440.sharedMaterials = i7442
  i7440.receiveShadows = !!i7441[4]
  i7440.shadowCastingMode = i7441[5]
  i7440.sortingLayerID = i7441[6]
  i7440.sortingOrder = i7441[7]
  i7440.lightmapIndex = i7441[8]
  i7440.lightmapSceneIndex = i7441[9]
  i7440.lightmapScaleOffset = new pc.Vec4( i7441[10], i7441[11], i7441[12], i7441[13] )
  i7440.lightProbeUsage = i7441[14]
  i7440.reflectionProbeUsage = i7441[15]
  request.r(i7441[16], i7441[17], 0, i7440, 'mesh')
  i7440.meshCount = i7441[18]
  i7440.activeVertexStreamsCount = i7441[19]
  i7440.alignment = i7441[20]
  i7440.renderMode = i7441[21]
  i7440.sortMode = i7441[22]
  i7440.lengthScale = i7441[23]
  i7440.velocityScale = i7441[24]
  i7440.cameraVelocityScale = i7441[25]
  i7440.normalDirection = i7441[26]
  i7440.sortingFudge = i7441[27]
  i7440.minParticleSize = i7441[28]
  i7440.maxParticleSize = i7441[29]
  i7440.pivot = new pc.Vec3( i7441[30], i7441[31], i7441[32] )
  request.r(i7441[33], i7441[34], 0, i7440, 'trailMaterial')
  return i7440
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i7444 = root || request.c( 'AutoDestroy' )
  var i7445 = data
  i7444.timeOut = i7445[0]
  i7444.typeDestroy = i7445[1]
  return i7444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i7446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i7447 = data
  i7446.textureMode = i7447[0]
  i7446.alignment = i7447[1]
  i7446.widthCurve = new pc.AnimationCurve( { keys_flow: i7447[2] } )
  i7446.colorGradient = i7447[3] ? new pc.ColorGradient(i7447[3][0], i7447[3][1], i7447[3][2]) : null
  var i7449 = i7447[4]
  var i7448 = []
  for(var i = 0; i < i7449.length; i += 3) {
    i7448.push( new pc.Vec3( i7449[i + 0], i7449[i + 1], i7449[i + 2] ) );
  }
  i7446.positions = i7448
  i7446.positionCount = i7447[5]
  i7446.widthMultiplier = i7447[6]
  i7446.startWidth = i7447[7]
  i7446.endWidth = i7447[8]
  i7446.numCornerVertices = i7447[9]
  i7446.numCapVertices = i7447[10]
  i7446.useWorldSpace = !!i7447[11]
  i7446.loop = !!i7447[12]
  i7446.startColor = new pc.Color(i7447[13], i7447[14], i7447[15], i7447[16])
  i7446.endColor = new pc.Color(i7447[17], i7447[18], i7447[19], i7447[20])
  i7446.generateLightingData = !!i7447[21]
  i7446.enabled = !!i7447[22]
  request.r(i7447[23], i7447[24], 0, i7446, 'sharedMaterial')
  var i7451 = i7447[25]
  var i7450 = []
  for(var i = 0; i < i7451.length; i += 2) {
  request.r(i7451[i + 0], i7451[i + 1], 2, i7450, '')
  }
  i7446.sharedMaterials = i7450
  i7446.receiveShadows = !!i7447[26]
  i7446.shadowCastingMode = i7447[27]
  i7446.sortingLayerID = i7447[28]
  i7446.sortingOrder = i7447[29]
  i7446.lightmapIndex = i7447[30]
  i7446.lightmapSceneIndex = i7447[31]
  i7446.lightmapScaleOffset = new pc.Vec4( i7447[32], i7447[33], i7447[34], i7447[35] )
  i7446.lightProbeUsage = i7447[36]
  i7446.reflectionProbeUsage = i7447[37]
  return i7446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7455 = data
  i7454.name = i7455[0]
  i7454.atlasId = i7455[1]
  i7454.mipmapCount = i7455[2]
  i7454.hdr = !!i7455[3]
  i7454.size = i7455[4]
  i7454.anisoLevel = i7455[5]
  i7454.filterMode = i7455[6]
  i7454.wrapMode = i7455[7]
  var i7457 = i7455[8]
  var i7456 = []
  for(var i = 0; i < i7457.length; i += 4) {
    i7456.push( UnityEngine.Rect.MinMaxRect(i7457[i + 0], i7457[i + 1], i7457[i + 2], i7457[i + 3]) );
  }
  i7454.rects = i7456
  return i7454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7461 = data
  i7460.name = i7461[0]
  i7460.index = i7461[1]
  i7460.startup = !!i7461[2]
  return i7460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7463 = data
  i7462.enabled = !!i7463[0]
  i7462.aspect = i7463[1]
  i7462.orthographic = !!i7463[2]
  i7462.orthographicSize = i7463[3]
  i7462.backgroundColor = new pc.Color(i7463[4], i7463[5], i7463[6], i7463[7])
  i7462.nearClipPlane = i7463[8]
  i7462.farClipPlane = i7463[9]
  i7462.fieldOfView = i7463[10]
  i7462.depth = i7463[11]
  i7462.clearFlags = i7463[12]
  i7462.cullingMask = i7463[13]
  i7462.rect = i7463[14]
  request.r(i7463[15], i7463[16], 0, i7462, 'targetTexture')
  return i7462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7465 = data
  i7464.enabled = !!i7465[0]
  i7464.type = i7465[1]
  i7464.color = new pc.Color(i7465[2], i7465[3], i7465[4], i7465[5])
  i7464.cullingMask = i7465[6]
  i7464.intensity = i7465[7]
  i7464.range = i7465[8]
  i7464.spotAngle = i7465[9]
  i7464.shadows = i7465[10]
  i7464.shadowNormalBias = i7465[11]
  i7464.shadowBias = i7465[12]
  i7464.shadowStrength = i7465[13]
  i7464.lightmapBakeType = i7465[14]
  i7464.renderMode = i7465[15]
  request.r(i7465[16], i7465[17], 0, i7464, 'cookie')
  i7464.cookieSize = i7465[18]
  return i7464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i7466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i7467 = data
  i7466.enabled = !!i7467[0]
  i7466.isTrigger = !!i7467[1]
  request.r(i7467[2], i7467[3], 0, i7466, 'material')
  request.r(i7467[4], i7467[5], 0, i7466, 'sharedMesh')
  i7466.convex = !!i7467[6]
  return i7466
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i7468 = root || request.c( 'HuggyCraft' )
  var i7469 = data
  request.r(i7469[0], i7469[1], 0, i7468, 'colliderAttack')
  request.r(i7469[2], i7469[3], 0, i7468, 'circle')
  request.r(i7469[4], i7469[5], 0, i7468, 'characterUp')
  request.r(i7469[6], i7469[7], 0, i7468, 'fxSmoke')
  i7468.charScale = new pc.Vec3( i7469[8], i7469[9], i7469[10] )
  i7468.index = i7469[11]
  i7468.isChoosed = !!i7469[12]
  request.r(i7469[13], i7469[14], 0, i7468, 'meshRenderer')
  i7468.isTargetEnemy = !!i7469[15]
  request.r(i7469[16], i7469[17], 0, i7468, 'animator')
  return i7468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i7470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i7471 = data
  i7470.playAutomatically = !!i7471[0]
  request.r(i7471[1], i7471[2], 0, i7470, 'clip')
  var i7473 = i7471[3]
  var i7472 = []
  for(var i = 0; i < i7473.length; i += 2) {
  request.r(i7473[i + 0], i7473[i + 1], 2, i7472, '')
  }
  i7470.clips = i7472
  i7470.wrapMode = i7471[4]
  i7470.enabled = !!i7471[5]
  return i7470
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i7476 = root || request.c( 'BunnyBunzoCraft' )
  var i7477 = data
  request.r(i7477[0], i7477[1], 0, i7476, 'animator')
  i7476.yDie = i7477[2]
  i7476.zDie = i7477[3]
  request.r(i7477[4], i7477[5], 0, i7476, 'meshRenderer')
  request.r(i7477[6], i7477[7], 0, i7476, 'shadow')
  request.r(i7477[8], i7477[9], 0, i7476, 'prefBullet')
  return i7476
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i7478 = root || request.c( 'KillyWillyCraft' )
  var i7479 = data
  request.r(i7479[0], i7479[1], 0, i7478, 'animator')
  i7478.yDie = i7479[2]
  i7478.zDie = i7479[3]
  request.r(i7479[4], i7479[5], 0, i7478, 'meshRenderer')
  request.r(i7479[6], i7479[7], 0, i7478, 'shadow')
  request.r(i7479[8], i7479[9], 0, i7478, 'prefBullet')
  return i7478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7481 = data
  i7480.pivot = new pc.Vec2( i7481[0], i7481[1] )
  i7480.anchorMin = new pc.Vec2( i7481[2], i7481[3] )
  i7480.anchorMax = new pc.Vec2( i7481[4], i7481[5] )
  i7480.sizeDelta = new pc.Vec2( i7481[6], i7481[7] )
  i7480.anchoredPosition3D = new pc.Vec3( i7481[8], i7481[9], i7481[10] )
  i7480.rotation = new pc.Quat(i7481[11], i7481[12], i7481[13], i7481[14])
  i7480.scale = new pc.Vec3( i7481[15], i7481[16], i7481[17] )
  return i7480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7483 = data
  i7482.enabled = !!i7483[0]
  i7482.planeDistance = i7483[1]
  i7482.referencePixelsPerUnit = i7483[2]
  i7482.isFallbackOverlay = !!i7483[3]
  i7482.renderMode = i7483[4]
  i7482.renderOrder = i7483[5]
  i7482.sortingLayerName = i7483[6]
  i7482.sortingOrder = i7483[7]
  i7482.scaleFactor = i7483[8]
  request.r(i7483[9], i7483[10], 0, i7482, 'worldCamera')
  i7482.overrideSorting = !!i7483[11]
  i7482.pixelPerfect = !!i7483[12]
  i7482.targetDisplay = i7483[13]
  i7482.overridePixelPerfect = !!i7483[14]
  return i7482
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7484 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7485 = data
  i7484.m_UiScaleMode = i7485[0]
  i7484.m_ReferencePixelsPerUnit = i7485[1]
  i7484.m_ScaleFactor = i7485[2]
  i7484.m_ReferenceResolution = new pc.Vec2( i7485[3], i7485[4] )
  i7484.m_ScreenMatchMode = i7485[5]
  i7484.m_MatchWidthOrHeight = i7485[6]
  i7484.m_PhysicalUnit = i7485[7]
  i7484.m_FallbackScreenDPI = i7485[8]
  i7484.m_DefaultSpriteDPI = i7485[9]
  i7484.m_DynamicPixelsPerUnit = i7485[10]
  return i7484
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7486 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7487 = data
  i7486.m_IgnoreReversedGraphics = !!i7487[0]
  i7486.m_BlockingObjects = i7487[1]
  i7486.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7487[2] )
  return i7486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7489 = data
  i7488.cullTransparentMesh = !!i7489[0]
  return i7488
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7490 = root || request.c( 'UnityEngine.UI.Image' )
  var i7491 = data
  request.r(i7491[0], i7491[1], 0, i7490, 'm_Sprite')
  i7490.m_Type = i7491[2]
  i7490.m_PreserveAspect = !!i7491[3]
  i7490.m_FillCenter = !!i7491[4]
  i7490.m_FillMethod = i7491[5]
  i7490.m_FillAmount = i7491[6]
  i7490.m_FillClockwise = !!i7491[7]
  i7490.m_FillOrigin = i7491[8]
  i7490.m_UseSpriteMesh = !!i7491[9]
  i7490.m_PixelsPerUnitMultiplier = i7491[10]
  request.r(i7491[11], i7491[12], 0, i7490, 'm_Material')
  i7490.m_Maskable = !!i7491[13]
  i7490.m_Color = new pc.Color(i7491[14], i7491[15], i7491[16], i7491[17])
  i7490.m_RaycastTarget = !!i7491[18]
  return i7490
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7492 = root || request.c( 'UnityEngine.UI.Button' )
  var i7493 = data
  i7492.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7493[0], i7492.m_OnClick)
  i7492.m_Navigation = request.d('UnityEngine.UI.Navigation', i7493[1], i7492.m_Navigation)
  i7492.m_Transition = i7493[2]
  i7492.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7493[3], i7492.m_Colors)
  i7492.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7493[4], i7492.m_SpriteState)
  i7492.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7493[5], i7492.m_AnimationTriggers)
  i7492.m_Interactable = !!i7493[6]
  request.r(i7493[7], i7493[8], 0, i7492, 'm_TargetGraphic')
  return i7492
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7494 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7495 = data
  i7494.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7495[0], i7494.m_PersistentCalls)
  return i7494
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7496 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7497 = data
  var i7499 = i7497[0]
  var i7498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7499.length; i += 1) {
    i7498.add(request.d('UnityEngine.Events.PersistentCall', i7499[i + 0]));
  }
  i7496.m_Calls = i7498
  return i7496
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7502 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7503 = data
  request.r(i7503[0], i7503[1], 0, i7502, 'm_Target')
  i7502.m_MethodName = i7503[2]
  i7502.m_Mode = i7503[3]
  i7502.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7503[4], i7502.m_Arguments)
  i7502.m_CallState = i7503[5]
  return i7502
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7504 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7505 = data
  i7504.m_Mode = i7505[0]
  request.r(i7505[1], i7505[2], 0, i7504, 'm_SelectOnUp')
  request.r(i7505[3], i7505[4], 0, i7504, 'm_SelectOnDown')
  request.r(i7505[5], i7505[6], 0, i7504, 'm_SelectOnLeft')
  request.r(i7505[7], i7505[8], 0, i7504, 'm_SelectOnRight')
  return i7504
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7506 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7507 = data
  i7506.m_NormalColor = new pc.Color(i7507[0], i7507[1], i7507[2], i7507[3])
  i7506.m_HighlightedColor = new pc.Color(i7507[4], i7507[5], i7507[6], i7507[7])
  i7506.m_PressedColor = new pc.Color(i7507[8], i7507[9], i7507[10], i7507[11])
  i7506.m_SelectedColor = new pc.Color(i7507[12], i7507[13], i7507[14], i7507[15])
  i7506.m_DisabledColor = new pc.Color(i7507[16], i7507[17], i7507[18], i7507[19])
  i7506.m_ColorMultiplier = i7507[20]
  i7506.m_FadeDuration = i7507[21]
  return i7506
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7508 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7509 = data
  request.r(i7509[0], i7509[1], 0, i7508, 'm_HighlightedSprite')
  request.r(i7509[2], i7509[3], 0, i7508, 'm_PressedSprite')
  request.r(i7509[4], i7509[5], 0, i7508, 'm_SelectedSprite')
  request.r(i7509[6], i7509[7], 0, i7508, 'm_DisabledSprite')
  return i7508
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7510 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7511 = data
  i7510.m_NormalTrigger = i7511[0]
  i7510.m_HighlightedTrigger = i7511[1]
  i7510.m_PressedTrigger = i7511[2]
  i7510.m_SelectedTrigger = i7511[3]
  i7510.m_DisabledTrigger = i7511[4]
  return i7510
}

Deserializers["SoundController"] = function (request, data, root) {
  var i7512 = root || request.c( 'SoundController' )
  var i7513 = data
  request.r(i7513[0], i7513[1], 0, i7512, 'audioSourceFX')
  request.r(i7513[2], i7513[3], 0, i7512, 'audioSourceBG')
  request.r(i7513[4], i7513[5], 0, i7512, 'clipChoose')
  request.r(i7513[6], i7513[7], 0, i7512, 'clipMerge')
  request.r(i7513[8], i7513[9], 0, i7512, 'clipLose')
  request.r(i7513[10], i7513[11], 0, i7512, 'clipWin')
  request.r(i7513[12], i7513[13], 0, i7512, 'clipPunch')
  request.r(i7513[14], i7513[15], 0, i7512, 'clipLightning')
  request.r(i7513[16], i7513[17], 0, i7512, 'clipFall')
  return i7512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7515 = data
  request.r(i7515[0], i7515[1], 0, i7514, 'clip')
  request.r(i7515[2], i7515[3], 0, i7514, 'outputAudioMixerGroup')
  i7514.playOnAwake = !!i7515[4]
  i7514.loop = !!i7515[5]
  i7514.time = i7515[6]
  i7514.volume = i7515[7]
  i7514.pitch = i7515[8]
  i7514.enabled = !!i7515[9]
  return i7514
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i7516 = root || request.c( 'MergeHuggyCraft1' )
  var i7517 = data
  request.r(i7517[0], i7517[1], 0, i7516, 'drawLine')
  i7516.isCanDraw = !!i7517[2]
  i7516.isEndGame = !!i7517[3]
  request.r(i7517[4], i7517[5], 0, i7516, 'cameraMain')
  request.r(i7517[6], i7517[7], 0, i7516, 'soundController')
  request.r(i7517[8], i7517[9], 0, i7516, 'characterParent')
  request.r(i7517[10], i7517[11], 0, i7516, 'enemyParent')
  var i7519 = i7517[12]
  var i7518 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i7519.length; i += 2) {
  request.r(i7519[i + 0], i7519[i + 1], 1, i7518, '')
  }
  i7516.lstCharacter = i7518
  var i7521 = i7517[13]
  var i7520 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i7521.length; i += 2) {
  request.r(i7521[i + 0], i7521[i + 1], 1, i7520, '')
  }
  i7516.lstEnemy = i7520
  i7516.isMergeWin = !!i7517[14]
  i7516.totalPlayer = i7517[15]
  request.r(i7517[16], i7517[17], 0, i7516, 'enemyMerge')
  request.r(i7517[18], i7517[19], 0, i7516, 'characterParent2')
  request.r(i7517[20], i7517[21], 0, i7516, 'enemyParent2')
  request.r(i7517[22], i7517[23], 0, i7516, 'map1')
  request.r(i7517[24], i7517[25], 0, i7516, 'map2')
  request.r(i7517[26], i7517[27], 0, i7516, 'bridge1')
  request.r(i7517[28], i7517[29], 0, i7516, 'bridge2')
  i7516.countEnd = i7517[30]
  request.r(i7517[31], i7517[32], 0, i7516, 'victory')
  request.r(i7517[33], i7517[34], 0, i7516, 'lose')
  request.r(i7517[35], i7517[36], 0, i7516, 'guide')
  request.r(i7517[37], i7517[38], 0, i7516, 'guideHand')
  request.r(i7517[39], i7517[40], 0, i7516, 'guideAttack')
  request.r(i7517[41], i7517[42], 0, i7516, 'gameEndUI')
  request.r(i7517[43], i7517[44], 0, i7516, 'fightBtn')
  return i7516
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i7526 = root || request.c( 'DrawLine' )
  var i7527 = data
  var i7529 = i7527[0]
  var i7528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i7529.length; i += 3) {
    i7528.add(new pc.Vec3( i7529[i + 0], i7529[i + 1], i7529[i + 2] ));
  }
  i7526.lstLinePoints = i7528
  request.r(i7527[1], i7527[2], 0, i7526, 'currentLine')
  i7526.lineColor = new pc.Color(i7527[3], i7527[4], i7527[5], i7527[6])
  i7526.lineWidth = i7527[7]
  i7526.timeDelay = i7527[8]
  request.r(i7527[9], i7527[10], 0, i7526, 'linePref')
  return i7526
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i7532 = root || request.c( 'ShootingRaycast' )
  var i7533 = data
  return i7532
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7534 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7535 = data
  request.r(i7535[0], i7535[1], 0, i7534, 'm_FirstSelected')
  i7534.m_sendNavigationEvents = !!i7535[2]
  i7534.m_DragThreshold = i7535[3]
  return i7534
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7536 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7537 = data
  i7536.m_HorizontalAxis = i7537[0]
  i7536.m_VerticalAxis = i7537[1]
  i7536.m_SubmitButton = i7537[2]
  i7536.m_CancelButton = i7537[3]
  i7536.m_InputActionsPerSecond = i7537[4]
  i7536.m_RepeatDelay = i7537[5]
  i7536.m_ForceModuleActive = !!i7537[6]
  return i7536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7539 = data
  i7538.ambientIntensity = i7539[0]
  i7538.reflectionIntensity = i7539[1]
  i7538.ambientMode = i7539[2]
  i7538.ambientLight = new pc.Color(i7539[3], i7539[4], i7539[5], i7539[6])
  i7538.ambientSkyColor = new pc.Color(i7539[7], i7539[8], i7539[9], i7539[10])
  i7538.ambientGroundColor = new pc.Color(i7539[11], i7539[12], i7539[13], i7539[14])
  i7538.ambientEquatorColor = new pc.Color(i7539[15], i7539[16], i7539[17], i7539[18])
  i7538.fogColor = new pc.Color(i7539[19], i7539[20], i7539[21], i7539[22])
  i7538.fogEndDistance = i7539[23]
  i7538.fogStartDistance = i7539[24]
  i7538.fogDensity = i7539[25]
  i7538.fog = !!i7539[26]
  request.r(i7539[27], i7539[28], 0, i7538, 'skybox')
  i7538.fogMode = i7539[29]
  var i7541 = i7539[30]
  var i7540 = []
  for(var i = 0; i < i7541.length; i += 1) {
    i7540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7541[i + 0]) );
  }
  i7538.lightmaps = i7540
  i7538.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7539[31], i7538.lightProbes)
  i7538.lightmapsMode = i7539[32]
  i7538.environmentLightingMode = i7539[33]
  i7538.ambientProbe = new pc.SphericalHarmonicsL2(i7539[34])
  request.r(i7539[35], i7539[36], 0, i7538, 'customReflection')
  request.r(i7539[37], i7539[38], 0, i7538, 'defaultReflection')
  i7538.defaultReflectionMode = i7539[39]
  i7538.defaultReflectionResolution = i7539[40]
  i7538.sunLightObjectId = i7539[41]
  i7538.pixelLightCount = i7539[42]
  i7538.defaultReflectionHDR = !!i7539[43]
  i7538.hasLightDataAsset = !!i7539[44]
  i7538.hasManualGenerate = !!i7539[45]
  return i7538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7545 = data
  request.r(i7545[0], i7545[1], 0, i7544, 'lightmapColor')
  request.r(i7545[2], i7545[3], 0, i7544, 'lightmapDirection')
  return i7544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7546 = root || new UnityEngine.LightProbes()
  var i7547 = data
  return i7546
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7552 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7553 = data
  i7552.useSafeMode = !!i7553[0]
  i7552.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7553[1], i7552.safeModeOptions)
  i7552.timeScale = i7553[2]
  i7552.useSmoothDeltaTime = !!i7553[3]
  i7552.maxSmoothUnscaledTime = i7553[4]
  i7552.rewindCallbackMode = i7553[5]
  i7552.showUnityEditorReport = !!i7553[6]
  i7552.logBehaviour = i7553[7]
  i7552.drawGizmos = !!i7553[8]
  i7552.defaultRecyclable = !!i7553[9]
  i7552.defaultAutoPlay = i7553[10]
  i7552.defaultUpdateType = i7553[11]
  i7552.defaultTimeScaleIndependent = !!i7553[12]
  i7552.defaultEaseType = i7553[13]
  i7552.defaultEaseOvershootOrAmplitude = i7553[14]
  i7552.defaultEasePeriod = i7553[15]
  i7552.defaultAutoKill = !!i7553[16]
  i7552.defaultLoopType = i7553[17]
  i7552.debugMode = !!i7553[18]
  i7552.debugStoreTargetId = !!i7553[19]
  i7552.showPreviewPanel = !!i7553[20]
  i7552.storeSettingsLocation = i7553[21]
  i7552.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7553[22], i7552.modules)
  i7552.createASMDEF = !!i7553[23]
  i7552.showPlayingTweens = !!i7553[24]
  i7552.showPausedTweens = !!i7553[25]
  return i7552
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7554 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7555 = data
  i7554.logBehaviour = i7555[0]
  i7554.nestedTweenFailureBehaviour = i7555[1]
  return i7554
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7556 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7557 = data
  i7556.showPanel = !!i7557[0]
  i7556.audioEnabled = !!i7557[1]
  i7556.physicsEnabled = !!i7557[2]
  i7556.physics2DEnabled = !!i7557[3]
  i7556.spriteEnabled = !!i7557[4]
  i7556.uiEnabled = !!i7557[5]
  i7556.textMeshProEnabled = !!i7557[6]
  i7556.tk2DEnabled = !!i7557[7]
  i7556.deAudioEnabled = !!i7557[8]
  i7556.deUnityExtendedEnabled = !!i7557[9]
  i7556.epoOutlineEnabled = !!i7557[10]
  return i7556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7559 = data
  var i7561 = i7559[0]
  var i7560 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i7561.length; i += 1) {
    i7560.add(i7561[i + 0]);
  }
  i7558.invalidShaderVariants = i7560
  i7558.name = i7559[1]
  i7558.guid = i7559[2]
  var i7563 = i7559[3]
  var i7562 = []
  for(var i = 0; i < i7563.length; i += 1) {
    i7562.push( i7563[i + 0] );
  }
  i7558.shaderDefinedKeywords = i7562
  var i7565 = i7559[4]
  var i7564 = []
  for(var i = 0; i < i7565.length; i += 1) {
    i7564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7565[i + 0]) );
  }
  i7558.passes = i7564
  var i7567 = i7559[5]
  var i7566 = []
  for(var i = 0; i < i7567.length; i += 1) {
    i7566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7567[i + 0]) );
  }
  i7558.usePasses = i7566
  var i7569 = i7559[6]
  var i7568 = []
  for(var i = 0; i < i7569.length; i += 1) {
    i7568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7569[i + 0]) );
  }
  i7558.defaultParameterValues = i7568
  request.r(i7559[7], i7559[8], 0, i7558, 'unityFallbackShader')
  i7558.readDepth = !!i7559[9]
  i7558.isCreatedByShaderGraph = !!i7559[10]
  return i7558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7576 = root || new pc.UnityShaderPass()
  var i7577 = data
  i7576.id = i7577[0]
  i7576.subShaderIndex = i7577[1]
  i7576.name = i7577[2]
  i7576.passType = i7577[3]
  i7576.usePass = !!i7577[4]
  i7576.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[5], i7576.zTest)
  i7576.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[6], i7576.zWrite)
  i7576.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[7], i7576.culling)
  i7576.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7577[8], i7576.blending)
  i7576.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7577[9], i7576.alphaBlending)
  i7576.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[10], i7576.colorWriteMask)
  i7576.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[11], i7576.offsetUnits)
  i7576.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[12], i7576.offsetFactor)
  i7576.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[13], i7576.stencilRef)
  i7576.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[14], i7576.stencilReadMask)
  i7576.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7577[15], i7576.stencilWriteMask)
  i7576.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7577[16], i7576.stencilOp)
  i7576.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7577[17], i7576.stencilOpFront)
  i7576.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7577[18], i7576.stencilOpBack)
  var i7579 = i7577[19]
  var i7578 = []
  for(var i = 0; i < i7579.length; i += 1) {
    i7578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7579[i + 0]) );
  }
  i7576.tags = i7578
  var i7581 = i7577[20]
  var i7580 = []
  for(var i = 0; i < i7581.length; i += 1) {
    i7580.push( i7581[i + 0] );
  }
  i7576.passDefinedKeywords = i7580
  var i7583 = i7577[21]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 1) {
    i7582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7583[i + 0]) );
  }
  i7576.variants = i7582
  var i7585 = i7577[22]
  var i7584 = []
  for(var i = 0; i < i7585.length; i += 1) {
    i7584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7585[i + 0]) );
  }
  i7576.excludedVariants = i7584
  i7576.hasDepthReader = !!i7577[23]
  return i7576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7587 = data
  i7586.val = i7587[0]
  i7586.name = i7587[1]
  return i7586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7589 = data
  i7588.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7589[0], i7588.src)
  i7588.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7589[1], i7588.dst)
  i7588.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7589[2], i7588.op)
  return i7588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7591 = data
  i7590.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7591[0], i7590.pass)
  i7590.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7591[1], i7590.fail)
  i7590.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7591[2], i7590.zFail)
  i7590.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7591[3], i7590.comp)
  return i7590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7595 = data
  i7594.name = i7595[0]
  i7594.value = i7595[1]
  return i7594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7599 = data
  i7598.passId = i7599[0]
  i7598.subShaderIndex = i7599[1]
  var i7601 = i7599[2]
  var i7600 = []
  for(var i = 0; i < i7601.length; i += 1) {
    i7600.push( i7601[i + 0] );
  }
  i7598.keywords = i7600
  i7598.vertexProgram = i7599[3]
  i7598.fragmentProgram = i7599[4]
  i7598.readDepth = !!i7599[5]
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7605 = data
  request.r(i7605[0], i7605[1], 0, i7604, 'shader')
  i7604.pass = i7605[2]
  return i7604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7609 = data
  i7608.name = i7609[0]
  i7608.type = i7609[1]
  i7608.value = new pc.Vec4( i7609[2], i7609[3], i7609[4], i7609[5] )
  i7608.textureValue = i7609[6]
  return i7608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7611 = data
  i7610.name = i7611[0]
  request.r(i7611[1], i7611[2], 0, i7610, 'texture')
  i7610.aabb = i7611[3]
  i7610.vertices = i7611[4]
  i7610.triangles = i7611[5]
  i7610.textureRect = UnityEngine.Rect.MinMaxRect(i7611[6], i7611[7], i7611[8], i7611[9])
  i7610.packedRect = UnityEngine.Rect.MinMaxRect(i7611[10], i7611[11], i7611[12], i7611[13])
  i7610.border = new pc.Vec4( i7611[14], i7611[15], i7611[16], i7611[17] )
  i7610.transparency = i7611[18]
  i7610.bounds = i7611[19]
  i7610.pixelsPerUnit = i7611[20]
  i7610.textureWidth = i7611[21]
  i7610.textureHeight = i7611[22]
  i7610.nativeSize = new pc.Vec2( i7611[23], i7611[24] )
  i7610.pivot = new pc.Vec2( i7611[25], i7611[26] )
  i7610.textureRectOffset = new pc.Vec2( i7611[27], i7611[28] )
  return i7610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7613 = data
  i7612.name = i7613[0]
  return i7612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7615 = data
  i7614.name = i7615[0]
  i7614.wrapMode = i7615[1]
  i7614.isLooping = !!i7615[2]
  i7614.length = i7615[3]
  var i7617 = i7615[4]
  var i7616 = []
  for(var i = 0; i < i7617.length; i += 1) {
    i7616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7617[i + 0]) );
  }
  i7614.curves = i7616
  var i7619 = i7615[5]
  var i7618 = []
  for(var i = 0; i < i7619.length; i += 1) {
    i7618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7619[i + 0]) );
  }
  i7614.events = i7618
  i7614.halfPrecision = !!i7615[6]
  return i7614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7623 = data
  i7622.path = i7623[0]
  i7622.componentType = i7623[1]
  i7622.property = i7623[2]
  i7622.keys = i7623[3]
  var i7625 = i7623[4]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 1) {
    i7624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7625[i + 0]) );
  }
  i7622.objectReferenceKeys = i7624
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7629 = data
  i7628.time = i7629[0]
  request.r(i7629[1], i7629[2], 0, i7628, 'value')
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7633 = data
  i7632.functionName = i7633[0]
  i7632.floatParameter = i7633[1]
  i7632.intParameter = i7633[2]
  i7632.stringParameter = i7633[3]
  request.r(i7633[4], i7633[5], 0, i7632, 'objectReferenceParameter')
  i7632.time = i7633[6]
  return i7632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7635 = data
  i7634.name = i7635[0]
  var i7637 = i7635[1]
  var i7636 = []
  for(var i = 0; i < i7637.length; i += 1) {
    i7636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7637[i + 0]) );
  }
  i7634.states = i7636
  var i7639 = i7635[2]
  var i7638 = []
  for(var i = 0; i < i7639.length; i += 1) {
    i7638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7639[i + 0]) );
  }
  i7634.layers = i7638
  var i7641 = i7635[3]
  var i7640 = []
  for(var i = 0; i < i7641.length; i += 1) {
    i7640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7641[i + 0]) );
  }
  i7634.parameters = i7640
  var i7643 = i7635[4]
  var i7642 = []
  for(var i = 0; i < i7643.length; i += 1) {
    i7642.push( i7643[i + 0] );
  }
  i7634.animationClips = i7642
  return i7634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7647 = data
  i7646.cycleOffset = i7647[0]
  i7646.cycleOffsetParameter = i7647[1]
  i7646.cycleOffsetParameterActive = !!i7647[2]
  i7646.mirror = !!i7647[3]
  i7646.mirrorParameter = i7647[4]
  i7646.mirrorParameterActive = !!i7647[5]
  i7646.motionId = i7647[6]
  i7646.nameHash = i7647[7]
  i7646.fullPathHash = i7647[8]
  i7646.speed = i7647[9]
  i7646.speedParameter = i7647[10]
  i7646.speedParameterActive = !!i7647[11]
  i7646.tag = i7647[12]
  i7646.name = i7647[13]
  i7646.writeDefaultValues = !!i7647[14]
  var i7649 = i7647[15]
  var i7648 = []
  for(var i = 0; i < i7649.length; i += 1) {
    i7648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7649[i + 0]) );
  }
  i7646.transitions = i7648
  var i7651 = i7647[16]
  var i7650 = []
  for(var i = 0; i < i7651.length; i += 2) {
  request.r(i7651[i + 0], i7651[i + 1], 2, i7650, '')
  }
  i7646.behaviours = i7650
  return i7646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7655 = data
  i7654.fullPath = i7655[0]
  i7654.canTransitionToSelf = !!i7655[1]
  i7654.duration = i7655[2]
  i7654.exitTime = i7655[3]
  i7654.hasExitTime = !!i7655[4]
  i7654.hasFixedDuration = !!i7655[5]
  i7654.interruptionSource = i7655[6]
  i7654.offset = i7655[7]
  i7654.orderedInterruption = !!i7655[8]
  i7654.destinationStateNameHash = i7655[9]
  i7654.destinationStateMachineId = i7655[10]
  i7654.isExit = !!i7655[11]
  i7654.mute = !!i7655[12]
  i7654.solo = !!i7655[13]
  var i7657 = i7655[14]
  var i7656 = []
  for(var i = 0; i < i7657.length; i += 1) {
    i7656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7657[i + 0]) );
  }
  i7654.conditions = i7656
  return i7654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7661 = data
  i7660.mode = i7661[0]
  i7660.parameter = i7661[1]
  i7660.threshold = i7661[2]
  return i7660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7667 = data
  i7666.blendingMode = i7667[0]
  i7666.defaultWeight = i7667[1]
  i7666.name = i7667[2]
  i7666.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7667[3], i7666.stateMachine)
  return i7666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7669 = data
  i7668.id = i7669[0]
  i7668.defaultStateNameHash = i7669[1]
  var i7671 = i7669[2]
  var i7670 = []
  for(var i = 0; i < i7671.length; i += 1) {
    i7670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7671[i + 0]) );
  }
  i7668.entryTransitions = i7670
  var i7673 = i7669[3]
  var i7672 = []
  for(var i = 0; i < i7673.length; i += 1) {
    i7672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7673[i + 0]) );
  }
  i7668.anyStateTransitions = i7672
  return i7668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7677 = data
  i7676.destinationStateNameHash = i7677[0]
  i7676.destinationStateMachineId = i7677[1]
  i7676.isExit = !!i7677[2]
  i7676.mute = !!i7677[3]
  i7676.solo = !!i7677[4]
  var i7679 = i7677[5]
  var i7678 = []
  for(var i = 0; i < i7679.length; i += 1) {
    i7678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7679[i + 0]) );
  }
  i7676.conditions = i7678
  return i7676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7683 = data
  i7682.defaultBool = !!i7683[0]
  i7682.defaultFloat = i7683[1]
  i7682.defaultInt = i7683[2]
  i7682.name = i7683[3]
  i7682.nameHash = i7683[4]
  i7682.type = i7683[5]
  return i7682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7685 = data
  var i7687 = i7685[0]
  var i7686 = []
  for(var i = 0; i < i7687.length; i += 1) {
    i7686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7687[i + 0]) );
  }
  i7684.files = i7686
  i7684.componentToPrefabIds = i7685[1]
  return i7684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7691 = data
  i7690.path = i7691[0]
  request.r(i7691[1], i7691[2], 0, i7690, 'unityObject')
  return i7690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7693 = data
  var i7695 = i7693[0]
  var i7694 = []
  for(var i = 0; i < i7695.length; i += 1) {
    i7694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7695[i + 0]) );
  }
  i7692.scriptsExecutionOrder = i7694
  var i7697 = i7693[1]
  var i7696 = []
  for(var i = 0; i < i7697.length; i += 1) {
    i7696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7697[i + 0]) );
  }
  i7692.sortingLayers = i7696
  var i7699 = i7693[2]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 1) {
    i7698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7699[i + 0]) );
  }
  i7692.cullingLayers = i7698
  i7692.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7693[3], i7692.timeSettings)
  i7692.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7693[4], i7692.physicsSettings)
  i7692.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7693[5], i7692.physics2DSettings)
  i7692.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7693[6], i7692.qualitySettings)
  i7692.removeShadows = !!i7693[7]
  i7692.autoInstantiatePrefabs = !!i7693[8]
  i7692.enableAutoInstancing = !!i7693[9]
  i7692.lightmapEncodingQuality = i7693[10]
  i7692.desiredColorSpace = i7693[11]
  return i7692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7703 = data
  i7702.name = i7703[0]
  i7702.value = i7703[1]
  return i7702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7707 = data
  i7706.id = i7707[0]
  i7706.name = i7707[1]
  i7706.value = i7707[2]
  return i7706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7711 = data
  i7710.id = i7711[0]
  i7710.name = i7711[1]
  return i7710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7713 = data
  i7712.fixedDeltaTime = i7713[0]
  i7712.maximumDeltaTime = i7713[1]
  i7712.timeScale = i7713[2]
  i7712.maximumParticleTimestep = i7713[3]
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7715 = data
  i7714.gravity = new pc.Vec3( i7715[0], i7715[1], i7715[2] )
  i7714.defaultSolverIterations = i7715[3]
  i7714.bounceThreshold = i7715[4]
  i7714.autoSyncTransforms = !!i7715[5]
  i7714.autoSimulation = !!i7715[6]
  var i7717 = i7715[7]
  var i7716 = []
  for(var i = 0; i < i7717.length; i += 1) {
    i7716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7717[i + 0]) );
  }
  i7714.collisionMatrix = i7716
  return i7714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7721 = data
  i7720.enabled = !!i7721[0]
  i7720.layerId = i7721[1]
  i7720.otherLayerId = i7721[2]
  return i7720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7723 = data
  request.r(i7723[0], i7723[1], 0, i7722, 'material')
  i7722.gravity = new pc.Vec2( i7723[2], i7723[3] )
  i7722.positionIterations = i7723[4]
  i7722.velocityIterations = i7723[5]
  i7722.velocityThreshold = i7723[6]
  i7722.maxLinearCorrection = i7723[7]
  i7722.maxAngularCorrection = i7723[8]
  i7722.maxTranslationSpeed = i7723[9]
  i7722.maxRotationSpeed = i7723[10]
  i7722.timeToSleep = i7723[11]
  i7722.linearSleepTolerance = i7723[12]
  i7722.angularSleepTolerance = i7723[13]
  i7722.defaultContactOffset = i7723[14]
  i7722.autoSimulation = !!i7723[15]
  i7722.queriesHitTriggers = !!i7723[16]
  i7722.queriesStartInColliders = !!i7723[17]
  i7722.callbacksOnDisable = !!i7723[18]
  i7722.reuseCollisionCallbacks = !!i7723[19]
  i7722.autoSyncTransforms = !!i7723[20]
  var i7725 = i7723[21]
  var i7724 = []
  for(var i = 0; i < i7725.length; i += 1) {
    i7724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7725[i + 0]) );
  }
  i7722.collisionMatrix = i7724
  return i7722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7729 = data
  i7728.enabled = !!i7729[0]
  i7728.layerId = i7729[1]
  i7728.otherLayerId = i7729[2]
  return i7728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7731 = data
  var i7733 = i7731[0]
  var i7732 = []
  for(var i = 0; i < i7733.length; i += 1) {
    i7732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7733[i + 0]) );
  }
  i7730.qualityLevels = i7732
  var i7735 = i7731[1]
  var i7734 = []
  for(var i = 0; i < i7735.length; i += 1) {
    i7734.push( i7735[i + 0] );
  }
  i7730.names = i7734
  i7730.shadows = i7731[2]
  i7730.anisotropicFiltering = i7731[3]
  i7730.antiAliasing = i7731[4]
  i7730.lodBias = i7731[5]
  i7730.shadowCascades = i7731[6]
  i7730.shadowDistance = i7731[7]
  i7730.shadowmaskMode = i7731[8]
  i7730.shadowProjection = i7731[9]
  i7730.shadowResolution = i7731[10]
  i7730.softParticles = !!i7731[11]
  i7730.softVegetation = !!i7731[12]
  i7730.activeColorSpace = i7731[13]
  i7730.desiredColorSpace = i7731[14]
  i7730.masterTextureLimit = i7731[15]
  i7730.maxQueuedFrames = i7731[16]
  i7730.particleRaycastBudget = i7731[17]
  i7730.pixelLightCount = i7731[18]
  i7730.realtimeReflectionProbes = !!i7731[19]
  i7730.shadowCascade2Split = i7731[20]
  i7730.shadowCascade4Split = new pc.Vec3( i7731[21], i7731[22], i7731[23] )
  i7730.streamingMipmapsActive = !!i7731[24]
  i7730.vSyncCount = i7731[25]
  i7730.asyncUploadBufferSize = i7731[26]
  i7730.asyncUploadTimeSlice = i7731[27]
  i7730.billboardsFaceCameraPosition = !!i7731[28]
  i7730.shadowNearPlaneOffset = i7731[29]
  i7730.streamingMipmapsMemoryBudget = i7731[30]
  i7730.maximumLODLevel = i7731[31]
  i7730.streamingMipmapsAddAllCameras = !!i7731[32]
  i7730.streamingMipmapsMaxLevelReduction = i7731[33]
  i7730.streamingMipmapsRenderersPerFrame = i7731[34]
  i7730.resolutionScalingFixedDPIFactor = i7731[35]
  i7730.streamingMipmapsMaxFileIORequests = i7731[36]
  i7730.currentQualityLevel = i7731[37]
  return i7730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7741 = data
  i7740.weight = i7741[0]
  i7740.vertices = i7741[1]
  i7740.normals = i7741[2]
  i7740.tangents = i7741[3]
  return i7740
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7742 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7743 = data
  request.r(i7743[0], i7743[1], 0, i7742, 'm_ObjectArgument')
  i7742.m_ObjectArgumentAssemblyTypeName = i7743[2]
  i7742.m_IntArgument = i7743[3]
  i7742.m_FloatArgument = i7743[4]
  i7742.m_StringArgument = i7743[5]
  i7742.m_BoolArgument = !!i7743[6]
  return i7742
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[9],"56":[21],"57":[6],"58":[6],"59":[6],"60":[6],"61":[6],"62":[6],"63":[6],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[21],"79":[14],"80":[81],"82":[81],"31":[30],"83":[30],"84":[35,30],"34":[31],"36":[35,30],"85":[30],"33":[31],"86":[30],"87":[30],"88":[30],"89":[30],"90":[30],"91":[30],"92":[30],"93":[30],"94":[35,30],"95":[35,30],"96":[30],"97":[30],"98":[30],"99":[30],"100":[35,30],"101":[30],"102":[44],"103":[44],"45":[44],"104":[44],"105":[21],"106":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","HumanCraft","UnityEngine.SkinnedMeshRenderer","UnityEngine.GameObject","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","AutoDestroy","UnityEngine.LineRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshCollider","HuggyCraft","UnityEngine.Animation","UnityEngine.AnimationClip","BunnyBunzoCraft","KillyWillyCraft","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","MergeHuggyCraft1","DrawLine","ShootingRaycast","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2019.4.23f1";

Deserializers.productName = "MergeMonster";

Deserializers.lunaInitializationTime = "07/01/2022 03:28:07";

Deserializers.lunaVersion = "3.10.0";

Deserializers.lunaSHA = "cdba22aba01f4512e3bc2afab61fa9d97c9da41b";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.2.16,com.unity.ide.rider: 1.1.4,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.22,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:E:/LunaDownload/3.10.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows";

Deserializers.applicationIdentifier = "com.DefaultCompany.MergeMonster";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "65edaa48-d61b-43c4-adb3-0f49de47fd90";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

