var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.JointSpring' )
  var i2461 = data
  i2460.spring = i2461[0]
  i2460.damper = i2461[1]
  i2460.targetPosition = i2461[2]
  return i2460
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.JointMotor' )
  var i2463 = data
  i2462.m_TargetVelocity = i2463[0]
  i2462.m_Force = i2463[1]
  i2462.m_FreeSpin = i2463[2]
  return i2462
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.JointLimits' )
  var i2465 = data
  i2464.m_Min = i2465[0]
  i2464.m_Max = i2465[1]
  i2464.m_Bounciness = i2465[2]
  i2464.m_BounceMinVelocity = i2465[3]
  i2464.m_ContactDistance = i2465[4]
  i2464.minBounce = i2465[5]
  i2464.maxBounce = i2465[6]
  return i2464
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.JointDrive' )
  var i2467 = data
  i2466.m_PositionSpring = i2467[0]
  i2466.m_PositionDamper = i2467[1]
  i2466.m_MaximumForce = i2467[2]
  return i2466
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2469 = data
  i2468.m_Spring = i2469[0]
  i2468.m_Damper = i2469[1]
  return i2468
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2470 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2471 = data
  i2470.m_Limit = i2471[0]
  i2470.m_Bounciness = i2471[1]
  i2470.m_ContactDistance = i2471[2]
  return i2470
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2473 = data
  i2472.m_ExtremumSlip = i2473[0]
  i2472.m_ExtremumValue = i2473[1]
  i2472.m_AsymptoteSlip = i2473[2]
  i2472.m_AsymptoteValue = i2473[3]
  i2472.m_Stiffness = i2473[4]
  return i2472
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2475 = data
  i2474.m_LowerAngle = i2475[0]
  i2474.m_UpperAngle = i2475[1]
  return i2474
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2477 = data
  i2476.m_MotorSpeed = i2477[0]
  i2476.m_MaximumMotorTorque = i2477[1]
  return i2476
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2479 = data
  i2478.m_DampingRatio = i2479[0]
  i2478.m_Frequency = i2479[1]
  i2478.m_Angle = i2479[2]
  return i2478
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2481 = data
  i2480.m_LowerTranslation = i2481[0]
  i2480.m_UpperTranslation = i2481[1]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2482 = root || new pc.UnityMaterial()
  var i2483 = data
  i2482.name = i2483[0]
  request.r(i2483[1], i2483[2], 0, i2482, 'shader')
  i2482.renderQueue = i2483[3]
  i2482.enableInstancing = !!i2483[4]
  var i2485 = i2483[5]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2485[i + 0]) );
  }
  i2482.floatParameters = i2484
  var i2487 = i2483[6]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2487[i + 0]) );
  }
  i2482.colorParameters = i2486
  var i2489 = i2483[7]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2489[i + 0]) );
  }
  i2482.vectorParameters = i2488
  var i2491 = i2483[8]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2491[i + 0]) );
  }
  i2482.textureParameters = i2490
  var i2493 = i2483[9]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2493[i + 0]) );
  }
  i2482.materialFlags = i2492
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2497 = data
  i2496.name = i2497[0]
  i2496.value = i2497[1]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.value = new pc.Color(i2501[1], i2501[2], i2501[3], i2501[4])
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2505 = data
  i2504.name = i2505[0]
  i2504.value = new pc.Vec4( i2505[1], i2505[2], i2505[3], i2505[4] )
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2509 = data
  i2508.name = i2509[0]
  request.r(i2509[1], i2509[2], 0, i2508, 'value')
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2513 = data
  i2512.name = i2513[0]
  i2512.enabled = !!i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.halfPrecision = !!i2515[1]
  i2514.vertexCount = i2515[2]
  i2514.aabb = i2515[3]
  var i2517 = i2515[4]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( !!i2517[i + 0] );
  }
  i2514.streams = i2516
  i2514.vertices = i2515[5]
  var i2519 = i2515[6]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2519[i + 0]) );
  }
  i2514.subMeshes = i2518
  var i2521 = i2515[7]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 16) {
    i2520.push( new pc.Mat4().setData(i2521[i + 0], i2521[i + 1], i2521[i + 2], i2521[i + 3],  i2521[i + 4], i2521[i + 5], i2521[i + 6], i2521[i + 7],  i2521[i + 8], i2521[i + 9], i2521[i + 10], i2521[i + 11],  i2521[i + 12], i2521[i + 13], i2521[i + 14], i2521[i + 15]) );
  }
  i2514.bindposes = i2520
  var i2523 = i2515[8]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2523[i + 0]) );
  }
  i2514.blendShapes = i2522
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2529 = data
  i2528.triangles = i2529[0]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2535 = data
  i2534.name = i2535[0]
  var i2537 = i2535[1]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2537[i + 0]) );
  }
  i2534.frames = i2536
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2539 = data
  i2538.name = i2539[0]
  i2538.width = i2539[1]
  i2538.height = i2539[2]
  i2538.mipmapCount = i2539[3]
  i2538.anisoLevel = i2539[4]
  i2538.filterMode = i2539[5]
  i2538.hdr = !!i2539[6]
  i2538.format = i2539[7]
  i2538.wrapMode = i2539[8]
  i2538.alphaIsTransparency = !!i2539[9]
  i2538.alphaSource = i2539[10]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2541 = data
  i2540.position = new pc.Vec3( i2541[0], i2541[1], i2541[2] )
  i2540.scale = new pc.Vec3( i2541[3], i2541[4], i2541[5] )
  i2540.rotation = new pc.Quat(i2541[6], i2541[7], i2541[8], i2541[9])
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'animatorController')
  i2542.updateMode = i2543[2]
  var i2545 = i2543[3]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 2) {
  request.r(i2545[i + 0], i2545[i + 1], 2, i2544, '')
  }
  i2542.humanBones = i2544
  i2542.enabled = !!i2543[4]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2549 = data
  i2548.center = new pc.Vec3( i2549[0], i2549[1], i2549[2] )
  i2548.size = new pc.Vec3( i2549[3], i2549[4], i2549[5] )
  i2548.enabled = !!i2549[6]
  i2548.isTrigger = !!i2549[7]
  request.r(i2549[8], i2549[9], 0, i2548, 'material')
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2551 = data
  i2550.mass = i2551[0]
  i2550.drag = i2551[1]
  i2550.angularDrag = i2551[2]
  i2550.useGravity = !!i2551[3]
  i2550.isKinematic = !!i2551[4]
  i2550.constraints = i2551[5]
  i2550.maxAngularVelocity = i2551[6]
  i2550.collisionDetectionMode = i2551[7]
  i2550.interpolation = i2551[8]
  return i2550
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i2552 = root || request.c( 'HuggyCraft' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'colliderAttack')
  request.r(i2553[2], i2553[3], 0, i2552, 'circle')
  request.r(i2553[4], i2553[5], 0, i2552, 'characterUp')
  request.r(i2553[6], i2553[7], 0, i2552, 'fxSmoke')
  i2552.charScale = new pc.Vec3( i2553[8], i2553[9], i2553[10] )
  i2552.index = i2553[11]
  i2552.isChoosed = !!i2553[12]
  request.r(i2553[13], i2553[14], 0, i2552, 'meshRenderer')
  var i2555 = i2553[15]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 1, i2554, '')
  }
  i2552.meshRenderers = i2554
  i2552.isTargetEnemy = !!i2553[16]
  request.r(i2553[17], i2553[18], 0, i2552, 'animator')
  i2552.maxDist = i2553[19]
  i2552.minDist = i2553[20]
  i2552.spinRate = i2553[21]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2559 = data
  i2558.name = i2559[0]
  i2558.tag = i2559[1]
  i2558.enabled = !!i2559[2]
  i2558.isStatic = !!i2559[3]
  i2558.layer = i2559[4]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2561 = data
  i2560.enabled = !!i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'sharedMaterial')
  var i2563 = i2561[3]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.sharedMaterials = i2562
  i2560.receiveShadows = !!i2561[4]
  i2560.shadowCastingMode = i2561[5]
  i2560.sortingLayerID = i2561[6]
  i2560.sortingOrder = i2561[7]
  i2560.lightmapIndex = i2561[8]
  i2560.lightmapSceneIndex = i2561[9]
  i2560.lightmapScaleOffset = new pc.Vec4( i2561[10], i2561[11], i2561[12], i2561[13] )
  i2560.lightProbeUsage = i2561[14]
  i2560.reflectionProbeUsage = i2561[15]
  request.r(i2561[16], i2561[17], 0, i2560, 'sharedMesh')
  var i2565 = i2561[18]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 2) {
  request.r(i2565[i + 0], i2565[i + 1], 2, i2564, '')
  }
  i2560.bones = i2564
  i2560.updateWhenOffscreen = !!i2561[19]
  i2560.localBounds = i2561[20]
  request.r(i2561[21], i2561[22], 0, i2560, 'rootBone')
  var i2567 = i2561[23]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2567[i + 0]) );
  }
  i2560.blendShapesWeights = i2566
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2573 = data
  i2572.weight = i2573[0]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2575 = data
  i2574.enabled = !!i2575[0]
  request.r(i2575[1], i2575[2], 0, i2574, 'sharedMaterial')
  var i2577 = i2575[3]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 2, i2576, '')
  }
  i2574.sharedMaterials = i2576
  i2574.receiveShadows = !!i2575[4]
  i2574.shadowCastingMode = i2575[5]
  i2574.sortingLayerID = i2575[6]
  i2574.sortingOrder = i2575[7]
  i2574.lightmapIndex = i2575[8]
  i2574.lightmapSceneIndex = i2575[9]
  i2574.lightmapScaleOffset = new pc.Vec4( i2575[10], i2575[11], i2575[12], i2575[13] )
  i2574.lightProbeUsage = i2575[14]
  i2574.reflectionProbeUsage = i2575[15]
  i2574.color = new pc.Color(i2575[16], i2575[17], i2575[18], i2575[19])
  request.r(i2575[20], i2575[21], 0, i2574, 'sprite')
  i2574.flipX = !!i2575[22]
  i2574.flipY = !!i2575[23]
  i2574.drawMode = i2575[24]
  i2574.size = new pc.Vec2( i2575[25], i2575[26] )
  i2574.tileMode = i2575[27]
  i2574.adaptiveModeThreshold = i2575[28]
  i2574.maskInteraction = i2575[29]
  i2574.spriteSortPoint = i2575[30]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2579 = data
  i2578.playAutomatically = !!i2579[0]
  request.r(i2579[1], i2579[2], 0, i2578, 'clip')
  var i2581 = i2579[3]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 2, i2580, '')
  }
  i2578.clips = i2580
  i2578.wrapMode = i2579[4]
  i2578.enabled = !!i2579[5]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2585 = data
  i2584.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2585[0], i2584.main)
  i2584.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2585[1], i2584.colorBySpeed)
  i2584.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2585[2], i2584.colorOverLifetime)
  i2584.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2585[3], i2584.emission)
  i2584.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2585[4], i2584.rotationBySpeed)
  i2584.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2585[5], i2584.rotationOverLifetime)
  i2584.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2585[6], i2584.shape)
  i2584.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2585[7], i2584.sizeBySpeed)
  i2584.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2585[8], i2584.sizeOverLifetime)
  i2584.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2585[9], i2584.textureSheetAnimation)
  i2584.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2585[10], i2584.velocityOverLifetime)
  i2584.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2585[11], i2584.noise)
  i2584.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2585[12], i2584.inheritVelocity)
  i2584.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2585[13], i2584.forceOverLifetime)
  i2584.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2585[14], i2584.limitVelocityOverLifetime)
  i2584.useAutoRandomSeed = !!i2585[15]
  i2584.randomSeed = i2585[16]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2586 = root || new pc.ParticleSystemMain()
  var i2587 = data
  i2586.duration = i2587[0]
  i2586.loop = !!i2587[1]
  i2586.prewarm = !!i2587[2]
  i2586.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[3], i2586.startDelay)
  i2586.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[4], i2586.startLifetime)
  i2586.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[5], i2586.startSpeed)
  i2586.startSize3D = !!i2587[6]
  i2586.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[7], i2586.startSizeX)
  i2586.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[8], i2586.startSizeY)
  i2586.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[9], i2586.startSizeZ)
  i2586.startRotation3D = !!i2587[10]
  i2586.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[11], i2586.startRotationX)
  i2586.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[12], i2586.startRotationY)
  i2586.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[13], i2586.startRotationZ)
  i2586.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2587[14], i2586.startColor)
  i2586.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[15], i2586.gravityModifier)
  i2586.simulationSpace = i2587[16]
  request.r(i2587[17], i2587[18], 0, i2586, 'customSimulationSpace')
  i2586.simulationSpeed = i2587[19]
  i2586.useUnscaledTime = !!i2587[20]
  i2586.scalingMode = i2587[21]
  i2586.playOnAwake = !!i2587[22]
  i2586.maxParticles = i2587[23]
  i2586.emitterVelocityMode = i2587[24]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2588 = root || new pc.MinMaxCurve()
  var i2589 = data
  i2588.mode = i2589[0]
  i2588.curveMin = new pc.AnimationCurve( { keys_flow: i2589[1] } )
  i2588.curveMax = new pc.AnimationCurve( { keys_flow: i2589[2] } )
  i2588.curveMultiplier = i2589[3]
  i2588.constantMin = i2589[4]
  i2588.constantMax = i2589[5]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2590 = root || new pc.MinMaxGradient()
  var i2591 = data
  i2590.mode = i2591[0]
  i2590.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2591[1], i2590.gradientMin)
  i2590.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2591[2], i2590.gradientMax)
  i2590.colorMin = new pc.Color(i2591[3], i2591[4], i2591[5], i2591[6])
  i2590.colorMax = new pc.Color(i2591[7], i2591[8], i2591[9], i2591[10])
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2593 = data
  i2592.mode = i2593[0]
  var i2595 = i2593[1]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2595[i + 0]) );
  }
  i2592.colorKeys = i2594
  var i2597 = i2593[2]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2597[i + 0]) );
  }
  i2592.alphaKeys = i2596
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2598 = root || new pc.ParticleSystemColorBySpeed()
  var i2599 = data
  i2598.enabled = !!i2599[0]
  i2598.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2599[1], i2598.color)
  i2598.range = new pc.Vec2( i2599[2], i2599[3] )
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2603 = data
  i2602.color = new pc.Color(i2603[0], i2603[1], i2603[2], i2603[3])
  i2602.time = i2603[4]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2607 = data
  i2606.alpha = i2607[0]
  i2606.time = i2607[1]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2608 = root || new pc.ParticleSystemColorOverLifetime()
  var i2609 = data
  i2608.enabled = !!i2609[0]
  i2608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2609[1], i2608.color)
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2610 = root || new pc.ParticleSystemEmitter()
  var i2611 = data
  i2610.enabled = !!i2611[0]
  i2610.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2611[1], i2610.rateOverTime)
  i2610.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2611[2], i2610.rateOverDistance)
  var i2613 = i2611[3]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2613[i + 0]) );
  }
  i2610.bursts = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2616 = root || new pc.ParticleSystemBurst()
  var i2617 = data
  i2616.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2617[0], i2616.count)
  i2616.cycleCount = i2617[1]
  i2616.minCount = i2617[2]
  i2616.maxCount = i2617[3]
  i2616.repeatInterval = i2617[4]
  i2616.time = i2617[5]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2618 = root || new pc.ParticleSystemRotationBySpeed()
  var i2619 = data
  i2618.enabled = !!i2619[0]
  i2618.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2619[1], i2618.x)
  i2618.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2619[2], i2618.y)
  i2618.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2619[3], i2618.z)
  i2618.separateAxes = !!i2619[4]
  i2618.range = new pc.Vec2( i2619[5], i2619[6] )
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2620 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2621 = data
  i2620.enabled = !!i2621[0]
  i2620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2621[1], i2620.x)
  i2620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2621[2], i2620.y)
  i2620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2621[3], i2620.z)
  i2620.separateAxes = !!i2621[4]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2622 = root || new pc.ParticleSystemShape()
  var i2623 = data
  i2622.enabled = !!i2623[0]
  i2622.shapeType = i2623[1]
  i2622.randomDirectionAmount = i2623[2]
  i2622.sphericalDirectionAmount = i2623[3]
  i2622.randomPositionAmount = i2623[4]
  i2622.alignToDirection = !!i2623[5]
  i2622.radius = i2623[6]
  i2622.radiusMode = i2623[7]
  i2622.radiusSpread = i2623[8]
  i2622.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2623[9], i2622.radiusSpeed)
  i2622.radiusThickness = i2623[10]
  i2622.angle = i2623[11]
  i2622.length = i2623[12]
  i2622.boxThickness = new pc.Vec3( i2623[13], i2623[14], i2623[15] )
  i2622.meshShapeType = i2623[16]
  request.r(i2623[17], i2623[18], 0, i2622, 'mesh')
  request.r(i2623[19], i2623[20], 0, i2622, 'meshRenderer')
  request.r(i2623[21], i2623[22], 0, i2622, 'skinnedMeshRenderer')
  i2622.useMeshMaterialIndex = !!i2623[23]
  i2622.meshMaterialIndex = i2623[24]
  i2622.useMeshColors = !!i2623[25]
  i2622.normalOffset = i2623[26]
  i2622.arc = i2623[27]
  i2622.arcMode = i2623[28]
  i2622.arcSpread = i2623[29]
  i2622.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2623[30], i2622.arcSpeed)
  i2622.donutRadius = i2623[31]
  i2622.position = new pc.Vec3( i2623[32], i2623[33], i2623[34] )
  i2622.rotation = new pc.Vec3( i2623[35], i2623[36], i2623[37] )
  i2622.scale = new pc.Vec3( i2623[38], i2623[39], i2623[40] )
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2624 = root || new pc.ParticleSystemSizeBySpeed()
  var i2625 = data
  i2624.enabled = !!i2625[0]
  i2624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2625[1], i2624.x)
  i2624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2625[2], i2624.y)
  i2624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2625[3], i2624.z)
  i2624.separateAxes = !!i2625[4]
  i2624.range = new pc.Vec2( i2625[5], i2625[6] )
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2626 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2627 = data
  i2626.enabled = !!i2627[0]
  i2626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2627[1], i2626.x)
  i2626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2627[2], i2626.y)
  i2626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2627[3], i2626.z)
  i2626.separateAxes = !!i2627[4]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2628 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2629 = data
  i2628.enabled = !!i2629[0]
  i2628.mode = i2629[1]
  i2628.animation = i2629[2]
  i2628.numTilesX = i2629[3]
  i2628.numTilesY = i2629[4]
  i2628.useRandomRow = !!i2629[5]
  i2628.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2629[6], i2628.frameOverTime)
  i2628.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2629[7], i2628.startFrame)
  i2628.cycleCount = i2629[8]
  i2628.rowIndex = i2629[9]
  i2628.flipU = i2629[10]
  i2628.flipV = i2629[11]
  i2628.spriteCount = i2629[12]
  var i2631 = i2629[13]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 2, i2630, '')
  }
  i2628.sprites = i2630
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2634 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2635 = data
  i2634.enabled = !!i2635[0]
  i2634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2635[1], i2634.x)
  i2634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2635[2], i2634.y)
  i2634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2635[3], i2634.z)
  i2634.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2635[4], i2634.speedModifier)
  i2634.space = i2635[5]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2636 = root || new pc.ParticleSystemNoise()
  var i2637 = data
  i2636.enabled = !!i2637[0]
  i2636.separateAxes = !!i2637[1]
  i2636.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[2], i2636.strengthX)
  i2636.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[3], i2636.strengthY)
  i2636.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[4], i2636.strengthZ)
  i2636.frequency = i2637[5]
  i2636.damping = !!i2637[6]
  i2636.octaveCount = i2637[7]
  i2636.octaveMultiplier = i2637[8]
  i2636.octaveScale = i2637[9]
  i2636.quality = i2637[10]
  i2636.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[11], i2636.scrollSpeed)
  i2636.scrollSpeedMultiplier = i2637[12]
  i2636.remapEnabled = !!i2637[13]
  i2636.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[14], i2636.remapX)
  i2636.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[15], i2636.remapY)
  i2636.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[16], i2636.remapZ)
  i2636.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[17], i2636.positionAmount)
  i2636.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[18], i2636.rotationAmount)
  i2636.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2637[19], i2636.sizeAmount)
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2638 = root || new pc.ParticleSystemInheritVelocity()
  var i2639 = data
  i2638.enabled = !!i2639[0]
  i2638.mode = i2639[1]
  i2638.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2639[2], i2638.curve)
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2640 = root || new pc.ParticleSystemForceOverLifetime()
  var i2641 = data
  i2640.enabled = !!i2641[0]
  i2640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2641[1], i2640.x)
  i2640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2641[2], i2640.y)
  i2640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2641[3], i2640.z)
  i2640.space = i2641[4]
  i2640.randomized = !!i2641[5]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2642 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2643 = data
  i2642.enabled = !!i2643[0]
  i2642.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2643[1], i2642.limitX)
  i2642.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2643[2], i2642.limitY)
  i2642.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2643[3], i2642.limitZ)
  i2642.dampen = i2643[4]
  i2642.separateAxes = !!i2643[5]
  i2642.space = i2643[6]
  i2642.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2643[7], i2642.drag)
  i2642.multiplyDragByParticleSize = !!i2643[8]
  i2642.multiplyDragByParticleVelocity = !!i2643[9]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2645 = data
  i2644.enabled = !!i2645[0]
  request.r(i2645[1], i2645[2], 0, i2644, 'sharedMaterial')
  var i2647 = i2645[3]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 2, i2646, '')
  }
  i2644.sharedMaterials = i2646
  i2644.receiveShadows = !!i2645[4]
  i2644.shadowCastingMode = i2645[5]
  i2644.sortingLayerID = i2645[6]
  i2644.sortingOrder = i2645[7]
  i2644.lightmapIndex = i2645[8]
  i2644.lightmapSceneIndex = i2645[9]
  i2644.lightmapScaleOffset = new pc.Vec4( i2645[10], i2645[11], i2645[12], i2645[13] )
  i2644.lightProbeUsage = i2645[14]
  i2644.reflectionProbeUsage = i2645[15]
  request.r(i2645[16], i2645[17], 0, i2644, 'mesh')
  i2644.meshCount = i2645[18]
  i2644.activeVertexStreamsCount = i2645[19]
  i2644.alignment = i2645[20]
  i2644.renderMode = i2645[21]
  i2644.sortMode = i2645[22]
  i2644.lengthScale = i2645[23]
  i2644.velocityScale = i2645[24]
  i2644.cameraVelocityScale = i2645[25]
  i2644.normalDirection = i2645[26]
  i2644.sortingFudge = i2645[27]
  i2644.minParticleSize = i2645[28]
  i2644.maxParticleSize = i2645[29]
  i2644.pivot = new pc.Vec3( i2645[30], i2645[31], i2645[32] )
  request.r(i2645[33], i2645[34], 0, i2644, 'trailMaterial')
  return i2644
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i2648 = root || request.c( 'AutoDestroy' )
  var i2649 = data
  i2648.timeOut = i2649[0]
  i2648.typeDestroy = i2649[1]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2651 = data
  i2650.textureMode = i2651[0]
  i2650.alignment = i2651[1]
  i2650.widthCurve = new pc.AnimationCurve( { keys_flow: i2651[2] } )
  i2650.colorGradient = i2651[3] ? new pc.ColorGradient(i2651[3][0], i2651[3][1], i2651[3][2]) : null
  var i2653 = i2651[4]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 3) {
    i2652.push( new pc.Vec3( i2653[i + 0], i2653[i + 1], i2653[i + 2] ) );
  }
  i2650.positions = i2652
  i2650.positionCount = i2651[5]
  i2650.widthMultiplier = i2651[6]
  i2650.startWidth = i2651[7]
  i2650.endWidth = i2651[8]
  i2650.numCornerVertices = i2651[9]
  i2650.numCapVertices = i2651[10]
  i2650.useWorldSpace = !!i2651[11]
  i2650.loop = !!i2651[12]
  i2650.startColor = new pc.Color(i2651[13], i2651[14], i2651[15], i2651[16])
  i2650.endColor = new pc.Color(i2651[17], i2651[18], i2651[19], i2651[20])
  i2650.generateLightingData = !!i2651[21]
  i2650.enabled = !!i2651[22]
  request.r(i2651[23], i2651[24], 0, i2650, 'sharedMaterial')
  var i2655 = i2651[25]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 2, i2654, '')
  }
  i2650.sharedMaterials = i2654
  i2650.receiveShadows = !!i2651[26]
  i2650.shadowCastingMode = i2651[27]
  i2650.sortingLayerID = i2651[28]
  i2650.sortingOrder = i2651[29]
  i2650.lightmapIndex = i2651[30]
  i2650.lightmapSceneIndex = i2651[31]
  i2650.lightmapScaleOffset = new pc.Vec4( i2651[32], i2651[33], i2651[34], i2651[35] )
  i2650.lightProbeUsage = i2651[36]
  i2650.reflectionProbeUsage = i2651[37]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2659 = data
  i2658.name = i2659[0]
  i2658.atlasId = i2659[1]
  i2658.mipmapCount = i2659[2]
  i2658.hdr = !!i2659[3]
  i2658.size = i2659[4]
  i2658.anisoLevel = i2659[5]
  i2658.filterMode = i2659[6]
  i2658.wrapMode = i2659[7]
  var i2661 = i2659[8]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 4) {
    i2660.push( UnityEngine.Rect.MinMaxRect(i2661[i + 0], i2661[i + 1], i2661[i + 2], i2661[i + 3]) );
  }
  i2658.rects = i2660
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2665 = data
  i2664.name = i2665[0]
  i2664.index = i2665[1]
  i2664.startup = !!i2665[2]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2667 = data
  i2666.enabled = !!i2667[0]
  i2666.aspect = i2667[1]
  i2666.orthographic = !!i2667[2]
  i2666.orthographicSize = i2667[3]
  i2666.backgroundColor = new pc.Color(i2667[4], i2667[5], i2667[6], i2667[7])
  i2666.nearClipPlane = i2667[8]
  i2666.farClipPlane = i2667[9]
  i2666.fieldOfView = i2667[10]
  i2666.depth = i2667[11]
  i2666.clearFlags = i2667[12]
  i2666.cullingMask = i2667[13]
  i2666.rect = i2667[14]
  request.r(i2667[15], i2667[16], 0, i2666, 'targetTexture')
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2669 = data
  i2668.enabled = !!i2669[0]
  i2668.type = i2669[1]
  i2668.color = new pc.Color(i2669[2], i2669[3], i2669[4], i2669[5])
  i2668.cullingMask = i2669[6]
  i2668.intensity = i2669[7]
  i2668.range = i2669[8]
  i2668.spotAngle = i2669[9]
  i2668.shadows = i2669[10]
  i2668.shadowNormalBias = i2669[11]
  i2668.shadowBias = i2669[12]
  i2668.shadowStrength = i2669[13]
  i2668.lightmapBakeType = i2669[14]
  i2668.renderMode = i2669[15]
  request.r(i2669[16], i2669[17], 0, i2668, 'cookie')
  i2668.cookieSize = i2669[18]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'sharedMesh')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'additionalVertexStreams')
  i2672.enabled = !!i2673[2]
  request.r(i2673[3], i2673[4], 0, i2672, 'sharedMaterial')
  var i2675 = i2673[5]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 2, i2674, '')
  }
  i2672.sharedMaterials = i2674
  i2672.receiveShadows = !!i2673[6]
  i2672.shadowCastingMode = i2673[7]
  i2672.sortingLayerID = i2673[8]
  i2672.sortingOrder = i2673[9]
  i2672.lightmapIndex = i2673[10]
  i2672.lightmapSceneIndex = i2673[11]
  i2672.lightmapScaleOffset = new pc.Vec4( i2673[12], i2673[13], i2673[14], i2673[15] )
  i2672.lightProbeUsage = i2673[16]
  i2672.reflectionProbeUsage = i2673[17]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2677 = data
  i2676.enabled = !!i2677[0]
  i2676.isTrigger = !!i2677[1]
  request.r(i2677[2], i2677[3], 0, i2676, 'material')
  request.r(i2677[4], i2677[5], 0, i2676, 'sharedMesh')
  i2676.convex = !!i2677[6]
  return i2676
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i2678 = root || request.c( 'BunnyBunzoCraft' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'animator')
  i2678.yDie = i2679[2]
  i2678.zDie = i2679[3]
  request.r(i2679[4], i2679[5], 0, i2678, 'meshRenderer')
  request.r(i2679[6], i2679[7], 0, i2678, 'shadow')
  request.r(i2679[8], i2679[9], 0, i2678, 'prefBullet')
  i2678.hp = i2679[10]
  i2678.currentHP = i2679[11]
  i2678.maxDist = i2679[12]
  i2678.minDist = i2679[13]
  return i2678
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i2680 = root || request.c( 'KillyWillyCraft' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'animator')
  i2680.yDie = i2681[2]
  i2680.zDie = i2681[3]
  request.r(i2681[4], i2681[5], 0, i2680, 'meshRenderer')
  request.r(i2681[6], i2681[7], 0, i2680, 'shadow')
  request.r(i2681[8], i2681[9], 0, i2680, 'prefBullet')
  i2680.hp = i2681[10]
  i2680.currentHP = i2681[11]
  i2680.maxDist = i2681[12]
  i2680.minDist = i2681[13]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2683 = data
  i2682.pivot = new pc.Vec2( i2683[0], i2683[1] )
  i2682.anchorMin = new pc.Vec2( i2683[2], i2683[3] )
  i2682.anchorMax = new pc.Vec2( i2683[4], i2683[5] )
  i2682.sizeDelta = new pc.Vec2( i2683[6], i2683[7] )
  i2682.anchoredPosition3D = new pc.Vec3( i2683[8], i2683[9], i2683[10] )
  i2682.rotation = new pc.Quat(i2683[11], i2683[12], i2683[13], i2683[14])
  i2682.scale = new pc.Vec3( i2683[15], i2683[16], i2683[17] )
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2685 = data
  i2684.enabled = !!i2685[0]
  i2684.planeDistance = i2685[1]
  i2684.referencePixelsPerUnit = i2685[2]
  i2684.isFallbackOverlay = !!i2685[3]
  i2684.renderMode = i2685[4]
  i2684.renderOrder = i2685[5]
  i2684.sortingLayerName = i2685[6]
  i2684.sortingOrder = i2685[7]
  i2684.scaleFactor = i2685[8]
  request.r(i2685[9], i2685[10], 0, i2684, 'worldCamera')
  i2684.overrideSorting = !!i2685[11]
  i2684.pixelPerfect = !!i2685[12]
  i2684.targetDisplay = i2685[13]
  i2684.overridePixelPerfect = !!i2685[14]
  return i2684
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2687 = data
  i2686.m_UiScaleMode = i2687[0]
  i2686.m_ReferencePixelsPerUnit = i2687[1]
  i2686.m_ScaleFactor = i2687[2]
  i2686.m_ReferenceResolution = new pc.Vec2( i2687[3], i2687[4] )
  i2686.m_ScreenMatchMode = i2687[5]
  i2686.m_MatchWidthOrHeight = i2687[6]
  i2686.m_PhysicalUnit = i2687[7]
  i2686.m_FallbackScreenDPI = i2687[8]
  i2686.m_DefaultSpriteDPI = i2687[9]
  i2686.m_DynamicPixelsPerUnit = i2687[10]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2689 = data
  i2688.cullTransparentMesh = !!i2689[0]
  return i2688
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.UI.Image' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'm_Sprite')
  i2690.m_Type = i2691[2]
  i2690.m_PreserveAspect = !!i2691[3]
  i2690.m_FillCenter = !!i2691[4]
  i2690.m_FillMethod = i2691[5]
  i2690.m_FillAmount = i2691[6]
  i2690.m_FillClockwise = !!i2691[7]
  i2690.m_FillOrigin = i2691[8]
  i2690.m_UseSpriteMesh = !!i2691[9]
  i2690.m_PixelsPerUnitMultiplier = i2691[10]
  request.r(i2691[11], i2691[12], 0, i2690, 'm_Material')
  i2690.m_Maskable = !!i2691[13]
  i2690.m_Color = new pc.Color(i2691[14], i2691[15], i2691[16], i2691[17])
  i2690.m_RaycastTarget = !!i2691[18]
  return i2690
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2693 = data
  i2692.m_IgnoreReversedGraphics = !!i2693[0]
  i2692.m_BlockingObjects = i2693[1]
  i2692.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2693[2] )
  return i2692
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.UI.Button' )
  var i2695 = data
  i2694.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2695[0], i2694.m_OnClick)
  i2694.m_Navigation = request.d('UnityEngine.UI.Navigation', i2695[1], i2694.m_Navigation)
  i2694.m_Transition = i2695[2]
  i2694.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2695[3], i2694.m_Colors)
  i2694.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2695[4], i2694.m_SpriteState)
  i2694.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2695[5], i2694.m_AnimationTriggers)
  i2694.m_Interactable = !!i2695[6]
  request.r(i2695[7], i2695[8], 0, i2694, 'm_TargetGraphic')
  return i2694
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2697 = data
  i2696.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2697[0], i2696.m_PersistentCalls)
  return i2696
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('UnityEngine.Events.PersistentCall', i2701[i + 0]));
  }
  i2698.m_Calls = i2700
  return i2698
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'm_Target')
  i2704.m_MethodName = i2705[2]
  i2704.m_Mode = i2705[3]
  i2704.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2705[4], i2704.m_Arguments)
  i2704.m_CallState = i2705[5]
  return i2704
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2707 = data
  i2706.m_Mode = i2707[0]
  request.r(i2707[1], i2707[2], 0, i2706, 'm_SelectOnUp')
  request.r(i2707[3], i2707[4], 0, i2706, 'm_SelectOnDown')
  request.r(i2707[5], i2707[6], 0, i2706, 'm_SelectOnLeft')
  request.r(i2707[7], i2707[8], 0, i2706, 'm_SelectOnRight')
  return i2706
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2709 = data
  i2708.m_NormalColor = new pc.Color(i2709[0], i2709[1], i2709[2], i2709[3])
  i2708.m_HighlightedColor = new pc.Color(i2709[4], i2709[5], i2709[6], i2709[7])
  i2708.m_PressedColor = new pc.Color(i2709[8], i2709[9], i2709[10], i2709[11])
  i2708.m_SelectedColor = new pc.Color(i2709[12], i2709[13], i2709[14], i2709[15])
  i2708.m_DisabledColor = new pc.Color(i2709[16], i2709[17], i2709[18], i2709[19])
  i2708.m_ColorMultiplier = i2709[20]
  i2708.m_FadeDuration = i2709[21]
  return i2708
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2711 = data
  request.r(i2711[0], i2711[1], 0, i2710, 'm_HighlightedSprite')
  request.r(i2711[2], i2711[3], 0, i2710, 'm_PressedSprite')
  request.r(i2711[4], i2711[5], 0, i2710, 'm_SelectedSprite')
  request.r(i2711[6], i2711[7], 0, i2710, 'm_DisabledSprite')
  return i2710
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2713 = data
  i2712.m_NormalTrigger = i2713[0]
  i2712.m_HighlightedTrigger = i2713[1]
  i2712.m_PressedTrigger = i2713[2]
  i2712.m_SelectedTrigger = i2713[3]
  i2712.m_DisabledTrigger = i2713[4]
  return i2712
}

Deserializers["DrawLineTutorial"] = function (request, data, root) {
  var i2714 = root || request.c( 'DrawLineTutorial' )
  var i2715 = data
  var i2717 = i2715[0]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2717.length; i += 3) {
    i2716.add(new pc.Vec3( i2717[i + 0], i2717[i + 1], i2717[i + 2] ));
  }
  i2714.lstLinePoints = i2716
  request.r(i2715[1], i2715[2], 0, i2714, 'currentLine')
  i2714.lineColor = new pc.Color(i2715[3], i2715[4], i2715[5], i2715[6])
  i2714.lineWidth = i2715[7]
  request.r(i2715[8], i2715[9], 0, i2714, 'drawPoint')
  request.r(i2715[10], i2715[11], 0, i2714, 'drawManager')
  i2714.timeDelay = i2715[12]
  request.r(i2715[13], i2715[14], 0, i2714, 'linePref')
  return i2714
}

Deserializers["SoundController"] = function (request, data, root) {
  var i2720 = root || request.c( 'SoundController' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'audioSourceFX')
  request.r(i2721[2], i2721[3], 0, i2720, 'audioSourceBG')
  request.r(i2721[4], i2721[5], 0, i2720, 'clipChoose')
  request.r(i2721[6], i2721[7], 0, i2720, 'clipMerge')
  request.r(i2721[8], i2721[9], 0, i2720, 'clipLose')
  request.r(i2721[10], i2721[11], 0, i2720, 'clipWin')
  request.r(i2721[12], i2721[13], 0, i2720, 'clipPunch')
  request.r(i2721[14], i2721[15], 0, i2720, 'clipLightning')
  request.r(i2721[16], i2721[17], 0, i2720, 'clipFall')
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2723 = data
  request.r(i2723[0], i2723[1], 0, i2722, 'clip')
  request.r(i2723[2], i2723[3], 0, i2722, 'outputAudioMixerGroup')
  i2722.playOnAwake = !!i2723[4]
  i2722.loop = !!i2723[5]
  i2722.time = i2723[6]
  i2722.volume = i2723[7]
  i2722.pitch = i2723[8]
  i2722.enabled = !!i2723[9]
  return i2722
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i2724 = root || request.c( 'MergeHuggyCraft1' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'drawLine')
  i2724.isCanDraw = !!i2725[2]
  i2724.isEndGame = !!i2725[3]
  request.r(i2725[4], i2725[5], 0, i2724, 'cameraMain')
  request.r(i2725[6], i2725[7], 0, i2724, 'soundController')
  request.r(i2725[8], i2725[9], 0, i2724, 'characterParent')
  request.r(i2725[10], i2725[11], 0, i2724, 'enemyParent')
  var i2727 = i2725[12]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 1, i2726, '')
  }
  i2724.lstCharacter = i2726
  var i2729 = i2725[13]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 1, i2728, '')
  }
  i2724.lstEnemy = i2728
  i2724.isMergeWin = !!i2725[14]
  i2724.totalPlayer = i2725[15]
  request.r(i2725[16], i2725[17], 0, i2724, 'enemyMerge')
  request.r(i2725[18], i2725[19], 0, i2724, 'characterParent2')
  request.r(i2725[20], i2725[21], 0, i2724, 'enemyParent2')
  request.r(i2725[22], i2725[23], 0, i2724, 'map1')
  request.r(i2725[24], i2725[25], 0, i2724, 'map2')
  request.r(i2725[26], i2725[27], 0, i2724, 'bridge1')
  request.r(i2725[28], i2725[29], 0, i2724, 'bridge2')
  request.r(i2725[30], i2725[31], 0, i2724, 'canvasBackground1')
  request.r(i2725[32], i2725[33], 0, i2724, 'canvasBackground2')
  i2724.countEnd = i2725[34]
  request.r(i2725[35], i2725[36], 0, i2724, 'victory')
  request.r(i2725[37], i2725[38], 0, i2724, 'lose')
  request.r(i2725[39], i2725[40], 0, i2724, 'guide')
  request.r(i2725[41], i2725[42], 0, i2724, 'guideHand')
  request.r(i2725[43], i2725[44], 0, i2724, 'guideAttack')
  request.r(i2725[45], i2725[46], 0, i2724, 'gameEndUI')
  request.r(i2725[47], i2725[48], 0, i2724, 'fightBtn')
  request.r(i2725[49], i2725[50], 0, i2724, 'guideDraw')
  return i2724
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i2734 = root || request.c( 'DrawLine' )
  var i2735 = data
  var i2737 = i2735[0]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2737.length; i += 3) {
    i2736.add(new pc.Vec3( i2737[i + 0], i2737[i + 1], i2737[i + 2] ));
  }
  i2734.lstLinePoints = i2736
  request.r(i2735[1], i2735[2], 0, i2734, 'currentLine')
  i2734.lineColor = new pc.Color(i2735[3], i2735[4], i2735[5], i2735[6])
  i2734.lineWidth = i2735[7]
  i2734.timeDelay = i2735[8]
  request.r(i2735[9], i2735[10], 0, i2734, 'linePref')
  return i2734
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i2738 = root || request.c( 'ShootingRaycast' )
  var i2739 = data
  return i2738
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'm_FirstSelected')
  i2740.m_sendNavigationEvents = !!i2741[2]
  i2740.m_DragThreshold = i2741[3]
  return i2740
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2743 = data
  i2742.m_HorizontalAxis = i2743[0]
  i2742.m_VerticalAxis = i2743[1]
  i2742.m_SubmitButton = i2743[2]
  i2742.m_CancelButton = i2743[3]
  i2742.m_InputActionsPerSecond = i2743[4]
  i2742.m_RepeatDelay = i2743[5]
  i2742.m_ForceModuleActive = !!i2743[6]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2745 = data
  i2744.ambientIntensity = i2745[0]
  i2744.reflectionIntensity = i2745[1]
  i2744.ambientMode = i2745[2]
  i2744.ambientLight = new pc.Color(i2745[3], i2745[4], i2745[5], i2745[6])
  i2744.ambientSkyColor = new pc.Color(i2745[7], i2745[8], i2745[9], i2745[10])
  i2744.ambientGroundColor = new pc.Color(i2745[11], i2745[12], i2745[13], i2745[14])
  i2744.ambientEquatorColor = new pc.Color(i2745[15], i2745[16], i2745[17], i2745[18])
  i2744.fogColor = new pc.Color(i2745[19], i2745[20], i2745[21], i2745[22])
  i2744.fogEndDistance = i2745[23]
  i2744.fogStartDistance = i2745[24]
  i2744.fogDensity = i2745[25]
  i2744.fog = !!i2745[26]
  request.r(i2745[27], i2745[28], 0, i2744, 'skybox')
  i2744.fogMode = i2745[29]
  var i2747 = i2745[30]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2747[i + 0]) );
  }
  i2744.lightmaps = i2746
  i2744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2745[31], i2744.lightProbes)
  i2744.lightmapsMode = i2745[32]
  i2744.environmentLightingMode = i2745[33]
  i2744.ambientProbe = new pc.SphericalHarmonicsL2(i2745[34])
  request.r(i2745[35], i2745[36], 0, i2744, 'customReflection')
  request.r(i2745[37], i2745[38], 0, i2744, 'defaultReflection')
  i2744.defaultReflectionMode = i2745[39]
  i2744.defaultReflectionResolution = i2745[40]
  i2744.sunLightObjectId = i2745[41]
  i2744.pixelLightCount = i2745[42]
  i2744.defaultReflectionHDR = !!i2745[43]
  i2744.hasLightDataAsset = !!i2745[44]
  i2744.hasManualGenerate = !!i2745[45]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'lightmapColor')
  request.r(i2751[2], i2751[3], 0, i2750, 'lightmapDirection')
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2752 = root || new UnityEngine.LightProbes()
  var i2753 = data
  return i2752
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2759 = data
  i2758.useSafeMode = !!i2759[0]
  i2758.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2759[1], i2758.safeModeOptions)
  i2758.timeScale = i2759[2]
  i2758.useSmoothDeltaTime = !!i2759[3]
  i2758.maxSmoothUnscaledTime = i2759[4]
  i2758.rewindCallbackMode = i2759[5]
  i2758.showUnityEditorReport = !!i2759[6]
  i2758.logBehaviour = i2759[7]
  i2758.drawGizmos = !!i2759[8]
  i2758.defaultRecyclable = !!i2759[9]
  i2758.defaultAutoPlay = i2759[10]
  i2758.defaultUpdateType = i2759[11]
  i2758.defaultTimeScaleIndependent = !!i2759[12]
  i2758.defaultEaseType = i2759[13]
  i2758.defaultEaseOvershootOrAmplitude = i2759[14]
  i2758.defaultEasePeriod = i2759[15]
  i2758.defaultAutoKill = !!i2759[16]
  i2758.defaultLoopType = i2759[17]
  i2758.debugMode = !!i2759[18]
  i2758.debugStoreTargetId = !!i2759[19]
  i2758.showPreviewPanel = !!i2759[20]
  i2758.storeSettingsLocation = i2759[21]
  i2758.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2759[22], i2758.modules)
  i2758.createASMDEF = !!i2759[23]
  i2758.showPlayingTweens = !!i2759[24]
  i2758.showPausedTweens = !!i2759[25]
  return i2758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2761 = data
  i2760.logBehaviour = i2761[0]
  i2760.nestedTweenFailureBehaviour = i2761[1]
  return i2760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2763 = data
  i2762.showPanel = !!i2763[0]
  i2762.audioEnabled = !!i2763[1]
  i2762.physicsEnabled = !!i2763[2]
  i2762.physics2DEnabled = !!i2763[3]
  i2762.spriteEnabled = !!i2763[4]
  i2762.uiEnabled = !!i2763[5]
  i2762.textMeshProEnabled = !!i2763[6]
  i2762.tk2DEnabled = !!i2763[7]
  i2762.deAudioEnabled = !!i2763[8]
  i2762.deUnityExtendedEnabled = !!i2763[9]
  i2762.epoOutlineEnabled = !!i2763[10]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.add(i2767[i + 0]);
  }
  i2764.invalidShaderVariants = i2766
  i2764.name = i2765[1]
  i2764.guid = i2765[2]
  var i2769 = i2765[3]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( i2769[i + 0] );
  }
  i2764.shaderDefinedKeywords = i2768
  var i2771 = i2765[4]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2771[i + 0]) );
  }
  i2764.passes = i2770
  var i2773 = i2765[5]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2773[i + 0]) );
  }
  i2764.usePasses = i2772
  var i2775 = i2765[6]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2775[i + 0]) );
  }
  i2764.defaultParameterValues = i2774
  request.r(i2765[7], i2765[8], 0, i2764, 'unityFallbackShader')
  i2764.readDepth = !!i2765[9]
  i2764.isCreatedByShaderGraph = !!i2765[10]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2782 = root || new pc.UnityShaderPass()
  var i2783 = data
  i2782.id = i2783[0]
  i2782.subShaderIndex = i2783[1]
  i2782.name = i2783[2]
  i2782.passType = i2783[3]
  i2782.usePass = !!i2783[4]
  i2782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[5], i2782.zTest)
  i2782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[6], i2782.zWrite)
  i2782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[7], i2782.culling)
  i2782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2783[8], i2782.blending)
  i2782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2783[9], i2782.alphaBlending)
  i2782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[10], i2782.colorWriteMask)
  i2782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[11], i2782.offsetUnits)
  i2782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[12], i2782.offsetFactor)
  i2782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[13], i2782.stencilRef)
  i2782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[14], i2782.stencilReadMask)
  i2782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[15], i2782.stencilWriteMask)
  i2782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2783[16], i2782.stencilOp)
  i2782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2783[17], i2782.stencilOpFront)
  i2782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2783[18], i2782.stencilOpBack)
  var i2785 = i2783[19]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2785[i + 0]) );
  }
  i2782.tags = i2784
  var i2787 = i2783[20]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( i2787[i + 0] );
  }
  i2782.passDefinedKeywords = i2786
  var i2789 = i2783[21]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2789[i + 0]) );
  }
  i2782.variants = i2788
  var i2791 = i2783[22]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2791[i + 0]) );
  }
  i2782.excludedVariants = i2790
  i2782.hasDepthReader = !!i2783[23]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2793 = data
  i2792.val = i2793[0]
  i2792.name = i2793[1]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2795 = data
  i2794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[0], i2794.src)
  i2794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[1], i2794.dst)
  i2794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[2], i2794.op)
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2797 = data
  i2796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[0], i2796.pass)
  i2796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[1], i2796.fail)
  i2796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[2], i2796.zFail)
  i2796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[3], i2796.comp)
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2801 = data
  i2800.name = i2801[0]
  i2800.value = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2805 = data
  i2804.passId = i2805[0]
  i2804.subShaderIndex = i2805[1]
  var i2807 = i2805[2]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( i2807[i + 0] );
  }
  i2804.keywords = i2806
  i2804.vertexProgram = i2805[3]
  i2804.fragmentProgram = i2805[4]
  i2804.readDepth = !!i2805[5]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'shader')
  i2810.pass = i2811[2]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2815 = data
  i2814.name = i2815[0]
  i2814.type = i2815[1]
  i2814.value = new pc.Vec4( i2815[2], i2815[3], i2815[4], i2815[5] )
  i2814.textureValue = i2815[6]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2817 = data
  i2816.name = i2817[0]
  request.r(i2817[1], i2817[2], 0, i2816, 'texture')
  i2816.aabb = i2817[3]
  i2816.vertices = i2817[4]
  i2816.triangles = i2817[5]
  i2816.textureRect = UnityEngine.Rect.MinMaxRect(i2817[6], i2817[7], i2817[8], i2817[9])
  i2816.packedRect = UnityEngine.Rect.MinMaxRect(i2817[10], i2817[11], i2817[12], i2817[13])
  i2816.border = new pc.Vec4( i2817[14], i2817[15], i2817[16], i2817[17] )
  i2816.transparency = i2817[18]
  i2816.bounds = i2817[19]
  i2816.pixelsPerUnit = i2817[20]
  i2816.textureWidth = i2817[21]
  i2816.textureHeight = i2817[22]
  i2816.nativeSize = new pc.Vec2( i2817[23], i2817[24] )
  i2816.pivot = new pc.Vec2( i2817[25], i2817[26] )
  i2816.textureRectOffset = new pc.Vec2( i2817[27], i2817[28] )
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2819 = data
  i2818.name = i2819[0]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2821 = data
  i2820.name = i2821[0]
  i2820.wrapMode = i2821[1]
  i2820.isLooping = !!i2821[2]
  i2820.length = i2821[3]
  var i2823 = i2821[4]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2823[i + 0]) );
  }
  i2820.curves = i2822
  var i2825 = i2821[5]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2825[i + 0]) );
  }
  i2820.events = i2824
  i2820.halfPrecision = !!i2821[6]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2829 = data
  i2828.path = i2829[0]
  i2828.componentType = i2829[1]
  i2828.property = i2829[2]
  i2828.keys = i2829[3]
  var i2831 = i2829[4]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2831[i + 0]) );
  }
  i2828.objectReferenceKeys = i2830
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2835 = data
  i2834.time = i2835[0]
  request.r(i2835[1], i2835[2], 0, i2834, 'value')
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2839 = data
  i2838.functionName = i2839[0]
  i2838.floatParameter = i2839[1]
  i2838.intParameter = i2839[2]
  i2838.stringParameter = i2839[3]
  request.r(i2839[4], i2839[5], 0, i2838, 'objectReferenceParameter')
  i2838.time = i2839[6]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2841 = data
  i2840.name = i2841[0]
  var i2843 = i2841[1]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2843[i + 0]) );
  }
  i2840.states = i2842
  var i2845 = i2841[2]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2845[i + 0]) );
  }
  i2840.layers = i2844
  var i2847 = i2841[3]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2847[i + 0]) );
  }
  i2840.parameters = i2846
  var i2849 = i2841[4]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( i2849[i + 0] );
  }
  i2840.animationClips = i2848
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2853 = data
  i2852.cycleOffset = i2853[0]
  i2852.cycleOffsetParameter = i2853[1]
  i2852.cycleOffsetParameterActive = !!i2853[2]
  i2852.mirror = !!i2853[3]
  i2852.mirrorParameter = i2853[4]
  i2852.mirrorParameterActive = !!i2853[5]
  i2852.motionId = i2853[6]
  i2852.nameHash = i2853[7]
  i2852.fullPathHash = i2853[8]
  i2852.speed = i2853[9]
  i2852.speedParameter = i2853[10]
  i2852.speedParameterActive = !!i2853[11]
  i2852.tag = i2853[12]
  i2852.name = i2853[13]
  i2852.writeDefaultValues = !!i2853[14]
  var i2855 = i2853[15]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2855[i + 0]) );
  }
  i2852.transitions = i2854
  var i2857 = i2853[16]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 2) {
  request.r(i2857[i + 0], i2857[i + 1], 2, i2856, '')
  }
  i2852.behaviours = i2856
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2861 = data
  i2860.fullPath = i2861[0]
  i2860.canTransitionToSelf = !!i2861[1]
  i2860.duration = i2861[2]
  i2860.exitTime = i2861[3]
  i2860.hasExitTime = !!i2861[4]
  i2860.hasFixedDuration = !!i2861[5]
  i2860.interruptionSource = i2861[6]
  i2860.offset = i2861[7]
  i2860.orderedInterruption = !!i2861[8]
  i2860.destinationStateNameHash = i2861[9]
  i2860.destinationStateMachineId = i2861[10]
  i2860.isExit = !!i2861[11]
  i2860.mute = !!i2861[12]
  i2860.solo = !!i2861[13]
  var i2863 = i2861[14]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2863[i + 0]) );
  }
  i2860.conditions = i2862
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2867 = data
  i2866.mode = i2867[0]
  i2866.parameter = i2867[1]
  i2866.threshold = i2867[2]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2873 = data
  i2872.blendingMode = i2873[0]
  i2872.defaultWeight = i2873[1]
  i2872.name = i2873[2]
  i2872.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2873[3], i2872.stateMachine)
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2875 = data
  i2874.id = i2875[0]
  i2874.defaultStateNameHash = i2875[1]
  var i2877 = i2875[2]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2877[i + 0]) );
  }
  i2874.entryTransitions = i2876
  var i2879 = i2875[3]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2879[i + 0]) );
  }
  i2874.anyStateTransitions = i2878
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2883 = data
  i2882.destinationStateNameHash = i2883[0]
  i2882.destinationStateMachineId = i2883[1]
  i2882.isExit = !!i2883[2]
  i2882.mute = !!i2883[3]
  i2882.solo = !!i2883[4]
  var i2885 = i2883[5]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2885[i + 0]) );
  }
  i2882.conditions = i2884
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2889 = data
  i2888.defaultBool = !!i2889[0]
  i2888.defaultFloat = i2889[1]
  i2888.defaultInt = i2889[2]
  i2888.name = i2889[3]
  i2888.nameHash = i2889[4]
  i2888.type = i2889[5]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2891 = data
  i2890.name = i2891[0]
  i2890.bytes64 = i2891[1]
  i2890.data = i2891[2]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2893 = data
  var i2895 = i2893[0]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2895[i + 0]) );
  }
  i2892.files = i2894
  i2892.componentToPrefabIds = i2893[1]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2899 = data
  i2898.path = i2899[0]
  request.r(i2899[1], i2899[2], 0, i2898, 'unityObject')
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2901 = data
  var i2903 = i2901[0]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2903[i + 0]) );
  }
  i2900.scriptsExecutionOrder = i2902
  var i2905 = i2901[1]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2905[i + 0]) );
  }
  i2900.sortingLayers = i2904
  var i2907 = i2901[2]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2907[i + 0]) );
  }
  i2900.cullingLayers = i2906
  i2900.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2901[3], i2900.timeSettings)
  i2900.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2901[4], i2900.physicsSettings)
  i2900.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2901[5], i2900.physics2DSettings)
  i2900.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2901[6], i2900.qualitySettings)
  i2900.removeShadows = !!i2901[7]
  i2900.autoInstantiatePrefabs = !!i2901[8]
  i2900.enableAutoInstancing = !!i2901[9]
  i2900.lightmapEncodingQuality = i2901[10]
  i2900.desiredColorSpace = i2901[11]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2911 = data
  i2910.name = i2911[0]
  i2910.value = i2911[1]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2915 = data
  i2914.id = i2915[0]
  i2914.name = i2915[1]
  i2914.value = i2915[2]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2919 = data
  i2918.id = i2919[0]
  i2918.name = i2919[1]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2921 = data
  i2920.fixedDeltaTime = i2921[0]
  i2920.maximumDeltaTime = i2921[1]
  i2920.timeScale = i2921[2]
  i2920.maximumParticleTimestep = i2921[3]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2923 = data
  i2922.gravity = new pc.Vec3( i2923[0], i2923[1], i2923[2] )
  i2922.defaultSolverIterations = i2923[3]
  i2922.bounceThreshold = i2923[4]
  i2922.autoSyncTransforms = !!i2923[5]
  i2922.autoSimulation = !!i2923[6]
  var i2925 = i2923[7]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2925[i + 0]) );
  }
  i2922.collisionMatrix = i2924
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2929 = data
  i2928.enabled = !!i2929[0]
  i2928.layerId = i2929[1]
  i2928.otherLayerId = i2929[2]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'material')
  i2930.gravity = new pc.Vec2( i2931[2], i2931[3] )
  i2930.positionIterations = i2931[4]
  i2930.velocityIterations = i2931[5]
  i2930.velocityThreshold = i2931[6]
  i2930.maxLinearCorrection = i2931[7]
  i2930.maxAngularCorrection = i2931[8]
  i2930.maxTranslationSpeed = i2931[9]
  i2930.maxRotationSpeed = i2931[10]
  i2930.timeToSleep = i2931[11]
  i2930.linearSleepTolerance = i2931[12]
  i2930.angularSleepTolerance = i2931[13]
  i2930.defaultContactOffset = i2931[14]
  i2930.autoSimulation = !!i2931[15]
  i2930.queriesHitTriggers = !!i2931[16]
  i2930.queriesStartInColliders = !!i2931[17]
  i2930.callbacksOnDisable = !!i2931[18]
  i2930.reuseCollisionCallbacks = !!i2931[19]
  i2930.autoSyncTransforms = !!i2931[20]
  var i2933 = i2931[21]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2933[i + 0]) );
  }
  i2930.collisionMatrix = i2932
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2937 = data
  i2936.enabled = !!i2937[0]
  i2936.layerId = i2937[1]
  i2936.otherLayerId = i2937[2]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2939 = data
  var i2941 = i2939[0]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2941[i + 0]) );
  }
  i2938.qualityLevels = i2940
  var i2943 = i2939[1]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( i2943[i + 0] );
  }
  i2938.names = i2942
  i2938.shadows = i2939[2]
  i2938.anisotropicFiltering = i2939[3]
  i2938.antiAliasing = i2939[4]
  i2938.lodBias = i2939[5]
  i2938.shadowCascades = i2939[6]
  i2938.shadowDistance = i2939[7]
  i2938.shadowmaskMode = i2939[8]
  i2938.shadowProjection = i2939[9]
  i2938.shadowResolution = i2939[10]
  i2938.softParticles = !!i2939[11]
  i2938.softVegetation = !!i2939[12]
  i2938.activeColorSpace = i2939[13]
  i2938.desiredColorSpace = i2939[14]
  i2938.masterTextureLimit = i2939[15]
  i2938.maxQueuedFrames = i2939[16]
  i2938.particleRaycastBudget = i2939[17]
  i2938.pixelLightCount = i2939[18]
  i2938.realtimeReflectionProbes = !!i2939[19]
  i2938.shadowCascade2Split = i2939[20]
  i2938.shadowCascade4Split = new pc.Vec3( i2939[21], i2939[22], i2939[23] )
  i2938.streamingMipmapsActive = !!i2939[24]
  i2938.vSyncCount = i2939[25]
  i2938.asyncUploadBufferSize = i2939[26]
  i2938.asyncUploadTimeSlice = i2939[27]
  i2938.billboardsFaceCameraPosition = !!i2939[28]
  i2938.shadowNearPlaneOffset = i2939[29]
  i2938.streamingMipmapsMemoryBudget = i2939[30]
  i2938.maximumLODLevel = i2939[31]
  i2938.streamingMipmapsAddAllCameras = !!i2939[32]
  i2938.streamingMipmapsMaxLevelReduction = i2939[33]
  i2938.streamingMipmapsRenderersPerFrame = i2939[34]
  i2938.resolutionScalingFixedDPIFactor = i2939[35]
  i2938.streamingMipmapsMaxFileIORequests = i2939[36]
  i2938.currentQualityLevel = i2939[37]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2949 = data
  i2948.weight = i2949[0]
  i2948.vertices = i2949[1]
  i2948.normals = i2949[2]
  i2948.tangents = i2949[3]
  return i2948
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2950 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2951 = data
  request.r(i2951[0], i2951[1], 0, i2950, 'm_ObjectArgument')
  i2950.m_ObjectArgumentAssemblyTypeName = i2951[2]
  i2950.m_IntArgument = i2951[3]
  i2950.m_FloatArgument = i2951[4]
  i2950.m_StringArgument = i2951[5]
  i2950.m_BoolArgument = !!i2951[6]
  return i2950
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[10],"57":[21],"58":[6],"59":[6],"60":[6],"61":[6],"62":[6],"63":[6],"64":[6],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[21],"80":[25],"81":[82],"83":[82],"30":[29],"84":[29],"85":[33,29],"35":[30],"34":[33,29],"86":[29],"32":[30],"87":[29],"88":[29],"89":[29],"90":[29],"91":[29],"92":[29],"93":[29],"94":[29],"95":[33,29],"96":[33,29],"97":[29],"98":[29],"99":[29],"100":[29],"101":[33,29],"102":[29],"103":[44],"104":[44],"45":[44],"105":[44],"106":[21],"107":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","HuggyCraft","UnityEngine.GameObject","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","AutoDestroy","UnityEngine.LineRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","BunnyBunzoCraft","KillyWillyCraft","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","DrawLineTutorial","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","MergeHuggyCraft1","DrawLine","ShootingRaycast","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2019.4.23f1";

Deserializers.productName = "MergeMonster";

Deserializers.lunaInitializationTime = "07/25/2022 02:42:15";

Deserializers.lunaVersion = "3.11.0";

Deserializers.lunaSHA = "bca344af70d69a797481d86a14a2bae415207c0c";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.2.16,com.unity.ide.rider: 1.1.4,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.22,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:../../3.11.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows";

Deserializers.applicationIdentifier = "com.DefaultCompany.MergeMonster";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "c8cd74ab-6047-47ae-a710-567edf732333";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

