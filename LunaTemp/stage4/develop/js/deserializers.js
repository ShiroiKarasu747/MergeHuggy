var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.JointSpring' )
  var i3389 = data
  i3388.spring = i3389[0]
  i3388.damper = i3389[1]
  i3388.targetPosition = i3389[2]
  return i3388
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.JointMotor' )
  var i3391 = data
  i3390.m_TargetVelocity = i3391[0]
  i3390.m_Force = i3391[1]
  i3390.m_FreeSpin = i3391[2]
  return i3390
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.JointLimits' )
  var i3393 = data
  i3392.m_Min = i3393[0]
  i3392.m_Max = i3393[1]
  i3392.m_Bounciness = i3393[2]
  i3392.m_BounceMinVelocity = i3393[3]
  i3392.m_ContactDistance = i3393[4]
  i3392.minBounce = i3393[5]
  i3392.maxBounce = i3393[6]
  return i3392
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.JointDrive' )
  var i3395 = data
  i3394.m_PositionSpring = i3395[0]
  i3394.m_PositionDamper = i3395[1]
  i3394.m_MaximumForce = i3395[2]
  return i3394
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3397 = data
  i3396.m_Spring = i3397[0]
  i3396.m_Damper = i3397[1]
  return i3396
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3398 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3399 = data
  i3398.m_Limit = i3399[0]
  i3398.m_Bounciness = i3399[1]
  i3398.m_ContactDistance = i3399[2]
  return i3398
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3401 = data
  i3400.m_ExtremumSlip = i3401[0]
  i3400.m_ExtremumValue = i3401[1]
  i3400.m_AsymptoteSlip = i3401[2]
  i3400.m_AsymptoteValue = i3401[3]
  i3400.m_Stiffness = i3401[4]
  return i3400
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3403 = data
  i3402.m_LowerAngle = i3403[0]
  i3402.m_UpperAngle = i3403[1]
  return i3402
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3404 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3405 = data
  i3404.m_MotorSpeed = i3405[0]
  i3404.m_MaximumMotorTorque = i3405[1]
  return i3404
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3407 = data
  i3406.m_DampingRatio = i3407[0]
  i3406.m_Frequency = i3407[1]
  i3406.m_Angle = i3407[2]
  return i3406
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3408 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3409 = data
  i3408.m_LowerTranslation = i3409[0]
  i3408.m_UpperTranslation = i3409[1]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3410 = root || new pc.UnityMaterial()
  var i3411 = data
  i3410.name = i3411[0]
  request.r(i3411[1], i3411[2], 0, i3410, 'shader')
  i3410.renderQueue = i3411[3]
  i3410.enableInstancing = !!i3411[4]
  var i3413 = i3411[5]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3413[i + 0]) );
  }
  i3410.floatParameters = i3412
  var i3415 = i3411[6]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3415[i + 0]) );
  }
  i3410.colorParameters = i3414
  var i3417 = i3411[7]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 1) {
    i3416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3417[i + 0]) );
  }
  i3410.vectorParameters = i3416
  var i3419 = i3411[8]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3419[i + 0]) );
  }
  i3410.textureParameters = i3418
  var i3421 = i3411[9]
  var i3420 = []
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3421[i + 0]) );
  }
  i3410.materialFlags = i3420
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3425 = data
  i3424.name = i3425[0]
  i3424.value = i3425[1]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3429 = data
  i3428.name = i3429[0]
  i3428.value = new pc.Color(i3429[1], i3429[2], i3429[3], i3429[4])
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3433 = data
  i3432.name = i3433[0]
  i3432.value = new pc.Vec4( i3433[1], i3433[2], i3433[3], i3433[4] )
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3437 = data
  i3436.name = i3437[0]
  request.r(i3437[1], i3437[2], 0, i3436, 'value')
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3441 = data
  i3440.name = i3441[0]
  i3440.enabled = !!i3441[1]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3443 = data
  i3442.name = i3443[0]
  i3442.halfPrecision = !!i3443[1]
  i3442.vertexCount = i3443[2]
  i3442.aabb = i3443[3]
  var i3445 = i3443[4]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( !!i3445[i + 0] );
  }
  i3442.streams = i3444
  i3442.vertices = i3443[5]
  var i3447 = i3443[6]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 1) {
    i3446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3447[i + 0]) );
  }
  i3442.subMeshes = i3446
  var i3449 = i3443[7]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 16) {
    i3448.push( new pc.Mat4().setData(i3449[i + 0], i3449[i + 1], i3449[i + 2], i3449[i + 3],  i3449[i + 4], i3449[i + 5], i3449[i + 6], i3449[i + 7],  i3449[i + 8], i3449[i + 9], i3449[i + 10], i3449[i + 11],  i3449[i + 12], i3449[i + 13], i3449[i + 14], i3449[i + 15]) );
  }
  i3442.bindposes = i3448
  var i3451 = i3443[8]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3451[i + 0]) );
  }
  i3442.blendShapes = i3450
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3457 = data
  i3456.triangles = i3457[0]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3463 = data
  i3462.name = i3463[0]
  var i3465 = i3463[1]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3465[i + 0]) );
  }
  i3462.frames = i3464
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3467 = data
  i3466.name = i3467[0]
  i3466.width = i3467[1]
  i3466.height = i3467[2]
  i3466.mipmapCount = i3467[3]
  i3466.anisoLevel = i3467[4]
  i3466.filterMode = i3467[5]
  i3466.hdr = !!i3467[6]
  i3466.format = i3467[7]
  i3466.wrapMode = i3467[8]
  i3466.alphaIsTransparency = !!i3467[9]
  i3466.alphaSource = i3467[10]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3469 = data
  i3468.position = new pc.Vec3( i3469[0], i3469[1], i3469[2] )
  i3468.scale = new pc.Vec3( i3469[3], i3469[4], i3469[5] )
  i3468.rotation = new pc.Quat(i3469[6], i3469[7], i3469[8], i3469[9])
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'animatorController')
  i3470.updateMode = i3471[2]
  var i3473 = i3471[3]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 2) {
  request.r(i3473[i + 0], i3473[i + 1], 2, i3472, '')
  }
  i3470.humanBones = i3472
  i3470.enabled = !!i3471[4]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3477 = data
  i3476.center = new pc.Vec3( i3477[0], i3477[1], i3477[2] )
  i3476.size = new pc.Vec3( i3477[3], i3477[4], i3477[5] )
  i3476.enabled = !!i3477[6]
  i3476.isTrigger = !!i3477[7]
  request.r(i3477[8], i3477[9], 0, i3476, 'material')
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3479 = data
  i3478.mass = i3479[0]
  i3478.drag = i3479[1]
  i3478.angularDrag = i3479[2]
  i3478.useGravity = !!i3479[3]
  i3478.isKinematic = !!i3479[4]
  i3478.constraints = i3479[5]
  i3478.maxAngularVelocity = i3479[6]
  i3478.collisionDetectionMode = i3479[7]
  i3478.interpolation = i3479[8]
  return i3478
}

Deserializers["HumanCraft"] = function (request, data, root) {
  var i3480 = root || request.c( 'HumanCraft' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'colliderAttack')
  request.r(i3481[2], i3481[3], 0, i3480, 'hand')
  request.r(i3481[4], i3481[5], 0, i3480, 'head')
  request.r(i3481[6], i3481[7], 0, i3480, 'circle')
  request.r(i3481[8], i3481[9], 0, i3480, 'characterUp')
  request.r(i3481[10], i3481[11], 0, i3480, 'fxSmoke')
  i3480.charScale = new pc.Vec3( i3481[12], i3481[13], i3481[14] )
  i3480.index = i3481[15]
  i3480.isChoosed = !!i3481[16]
  request.r(i3481[17], i3481[18], 0, i3480, 'meshRenderer')
  i3480.isTargetEnemy = !!i3481[19]
  request.r(i3481[20], i3481[21], 0, i3480, 'animator')
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3483 = data
  i3482.enabled = !!i3483[0]
  request.r(i3483[1], i3483[2], 0, i3482, 'sharedMaterial')
  var i3485 = i3483[3]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 2) {
  request.r(i3485[i + 0], i3485[i + 1], 2, i3484, '')
  }
  i3482.sharedMaterials = i3484
  i3482.receiveShadows = !!i3483[4]
  i3482.shadowCastingMode = i3483[5]
  i3482.sortingLayerID = i3483[6]
  i3482.sortingOrder = i3483[7]
  i3482.lightmapIndex = i3483[8]
  i3482.lightmapSceneIndex = i3483[9]
  i3482.lightmapScaleOffset = new pc.Vec4( i3483[10], i3483[11], i3483[12], i3483[13] )
  i3482.lightProbeUsage = i3483[14]
  i3482.reflectionProbeUsage = i3483[15]
  request.r(i3483[16], i3483[17], 0, i3482, 'sharedMesh')
  var i3487 = i3483[18]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3482.bones = i3486
  i3482.updateWhenOffscreen = !!i3483[19]
  i3482.localBounds = i3483[20]
  request.r(i3483[21], i3483[22], 0, i3482, 'rootBone')
  var i3489 = i3483[23]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3489[i + 0]) );
  }
  i3482.blendShapesWeights = i3488
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3495 = data
  i3494.weight = i3495[0]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3497 = data
  i3496.name = i3497[0]
  i3496.tag = i3497[1]
  i3496.enabled = !!i3497[2]
  i3496.isStatic = !!i3497[3]
  i3496.layer = i3497[4]
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3499 = data
  request.r(i3499[0], i3499[1], 0, i3498, 'sharedMesh')
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'additionalVertexStreams')
  i3500.enabled = !!i3501[2]
  request.r(i3501[3], i3501[4], 0, i3500, 'sharedMaterial')
  var i3503 = i3501[5]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 2) {
  request.r(i3503[i + 0], i3503[i + 1], 2, i3502, '')
  }
  i3500.sharedMaterials = i3502
  i3500.receiveShadows = !!i3501[6]
  i3500.shadowCastingMode = i3501[7]
  i3500.sortingLayerID = i3501[8]
  i3500.sortingOrder = i3501[9]
  i3500.lightmapIndex = i3501[10]
  i3500.lightmapSceneIndex = i3501[11]
  i3500.lightmapScaleOffset = new pc.Vec4( i3501[12], i3501[13], i3501[14], i3501[15] )
  i3500.lightProbeUsage = i3501[16]
  i3500.reflectionProbeUsage = i3501[17]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3505 = data
  i3504.enabled = !!i3505[0]
  request.r(i3505[1], i3505[2], 0, i3504, 'sharedMaterial')
  var i3507 = i3505[3]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 2) {
  request.r(i3507[i + 0], i3507[i + 1], 2, i3506, '')
  }
  i3504.sharedMaterials = i3506
  i3504.receiveShadows = !!i3505[4]
  i3504.shadowCastingMode = i3505[5]
  i3504.sortingLayerID = i3505[6]
  i3504.sortingOrder = i3505[7]
  i3504.lightmapIndex = i3505[8]
  i3504.lightmapSceneIndex = i3505[9]
  i3504.lightmapScaleOffset = new pc.Vec4( i3505[10], i3505[11], i3505[12], i3505[13] )
  i3504.lightProbeUsage = i3505[14]
  i3504.reflectionProbeUsage = i3505[15]
  i3504.color = new pc.Color(i3505[16], i3505[17], i3505[18], i3505[19])
  request.r(i3505[20], i3505[21], 0, i3504, 'sprite')
  i3504.flipX = !!i3505[22]
  i3504.flipY = !!i3505[23]
  i3504.drawMode = i3505[24]
  i3504.size = new pc.Vec2( i3505[25], i3505[26] )
  i3504.tileMode = i3505[27]
  i3504.adaptiveModeThreshold = i3505[28]
  i3504.maskInteraction = i3505[29]
  i3504.spriteSortPoint = i3505[30]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3509 = data
  i3508.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3509[0], i3508.main)
  i3508.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3509[1], i3508.colorBySpeed)
  i3508.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3509[2], i3508.colorOverLifetime)
  i3508.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3509[3], i3508.emission)
  i3508.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3509[4], i3508.rotationBySpeed)
  i3508.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3509[5], i3508.rotationOverLifetime)
  i3508.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3509[6], i3508.shape)
  i3508.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3509[7], i3508.sizeBySpeed)
  i3508.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3509[8], i3508.sizeOverLifetime)
  i3508.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3509[9], i3508.textureSheetAnimation)
  i3508.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3509[10], i3508.velocityOverLifetime)
  i3508.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3509[11], i3508.noise)
  i3508.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3509[12], i3508.inheritVelocity)
  i3508.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3509[13], i3508.forceOverLifetime)
  i3508.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3509[14], i3508.limitVelocityOverLifetime)
  i3508.useAutoRandomSeed = !!i3509[15]
  i3508.randomSeed = i3509[16]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3510 = root || new pc.ParticleSystemMain()
  var i3511 = data
  i3510.duration = i3511[0]
  i3510.loop = !!i3511[1]
  i3510.prewarm = !!i3511[2]
  i3510.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[3], i3510.startDelay)
  i3510.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[4], i3510.startLifetime)
  i3510.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[5], i3510.startSpeed)
  i3510.startSize3D = !!i3511[6]
  i3510.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[7], i3510.startSizeX)
  i3510.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[8], i3510.startSizeY)
  i3510.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[9], i3510.startSizeZ)
  i3510.startRotation3D = !!i3511[10]
  i3510.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[11], i3510.startRotationX)
  i3510.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[12], i3510.startRotationY)
  i3510.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[13], i3510.startRotationZ)
  i3510.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3511[14], i3510.startColor)
  i3510.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3511[15], i3510.gravityModifier)
  i3510.simulationSpace = i3511[16]
  request.r(i3511[17], i3511[18], 0, i3510, 'customSimulationSpace')
  i3510.simulationSpeed = i3511[19]
  i3510.useUnscaledTime = !!i3511[20]
  i3510.scalingMode = i3511[21]
  i3510.playOnAwake = !!i3511[22]
  i3510.maxParticles = i3511[23]
  i3510.emitterVelocityMode = i3511[24]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3512 = root || new pc.MinMaxCurve()
  var i3513 = data
  i3512.mode = i3513[0]
  i3512.curveMin = new pc.AnimationCurve( { keys_flow: i3513[1] } )
  i3512.curveMax = new pc.AnimationCurve( { keys_flow: i3513[2] } )
  i3512.curveMultiplier = i3513[3]
  i3512.constantMin = i3513[4]
  i3512.constantMax = i3513[5]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3514 = root || new pc.MinMaxGradient()
  var i3515 = data
  i3514.mode = i3515[0]
  i3514.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3515[1], i3514.gradientMin)
  i3514.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3515[2], i3514.gradientMax)
  i3514.colorMin = new pc.Color(i3515[3], i3515[4], i3515[5], i3515[6])
  i3514.colorMax = new pc.Color(i3515[7], i3515[8], i3515[9], i3515[10])
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3517 = data
  i3516.mode = i3517[0]
  var i3519 = i3517[1]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3519[i + 0]) );
  }
  i3516.colorKeys = i3518
  var i3521 = i3517[2]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3521[i + 0]) );
  }
  i3516.alphaKeys = i3520
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3522 = root || new pc.ParticleSystemColorBySpeed()
  var i3523 = data
  i3522.enabled = !!i3523[0]
  i3522.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3523[1], i3522.color)
  i3522.range = new pc.Vec2( i3523[2], i3523[3] )
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3527 = data
  i3526.color = new pc.Color(i3527[0], i3527[1], i3527[2], i3527[3])
  i3526.time = i3527[4]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3531 = data
  i3530.alpha = i3531[0]
  i3530.time = i3531[1]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3532 = root || new pc.ParticleSystemColorOverLifetime()
  var i3533 = data
  i3532.enabled = !!i3533[0]
  i3532.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3533[1], i3532.color)
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3534 = root || new pc.ParticleSystemEmitter()
  var i3535 = data
  i3534.enabled = !!i3535[0]
  i3534.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3535[1], i3534.rateOverTime)
  i3534.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3535[2], i3534.rateOverDistance)
  var i3537 = i3535[3]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3537[i + 0]) );
  }
  i3534.bursts = i3536
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3540 = root || new pc.ParticleSystemBurst()
  var i3541 = data
  i3540.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[0], i3540.count)
  i3540.cycleCount = i3541[1]
  i3540.minCount = i3541[2]
  i3540.maxCount = i3541[3]
  i3540.repeatInterval = i3541[4]
  i3540.time = i3541[5]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3542 = root || new pc.ParticleSystemRotationBySpeed()
  var i3543 = data
  i3542.enabled = !!i3543[0]
  i3542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[1], i3542.x)
  i3542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[2], i3542.y)
  i3542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[3], i3542.z)
  i3542.separateAxes = !!i3543[4]
  i3542.range = new pc.Vec2( i3543[5], i3543[6] )
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3544 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3545 = data
  i3544.enabled = !!i3545[0]
  i3544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[1], i3544.x)
  i3544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[2], i3544.y)
  i3544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[3], i3544.z)
  i3544.separateAxes = !!i3545[4]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3546 = root || new pc.ParticleSystemShape()
  var i3547 = data
  i3546.enabled = !!i3547[0]
  i3546.shapeType = i3547[1]
  i3546.randomDirectionAmount = i3547[2]
  i3546.sphericalDirectionAmount = i3547[3]
  i3546.randomPositionAmount = i3547[4]
  i3546.alignToDirection = !!i3547[5]
  i3546.radius = i3547[6]
  i3546.radiusMode = i3547[7]
  i3546.radiusSpread = i3547[8]
  i3546.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[9], i3546.radiusSpeed)
  i3546.radiusThickness = i3547[10]
  i3546.angle = i3547[11]
  i3546.length = i3547[12]
  i3546.boxThickness = new pc.Vec3( i3547[13], i3547[14], i3547[15] )
  i3546.meshShapeType = i3547[16]
  request.r(i3547[17], i3547[18], 0, i3546, 'mesh')
  request.r(i3547[19], i3547[20], 0, i3546, 'meshRenderer')
  request.r(i3547[21], i3547[22], 0, i3546, 'skinnedMeshRenderer')
  i3546.useMeshMaterialIndex = !!i3547[23]
  i3546.meshMaterialIndex = i3547[24]
  i3546.useMeshColors = !!i3547[25]
  i3546.normalOffset = i3547[26]
  i3546.arc = i3547[27]
  i3546.arcMode = i3547[28]
  i3546.arcSpread = i3547[29]
  i3546.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[30], i3546.arcSpeed)
  i3546.donutRadius = i3547[31]
  i3546.position = new pc.Vec3( i3547[32], i3547[33], i3547[34] )
  i3546.rotation = new pc.Vec3( i3547[35], i3547[36], i3547[37] )
  i3546.scale = new pc.Vec3( i3547[38], i3547[39], i3547[40] )
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3548 = root || new pc.ParticleSystemSizeBySpeed()
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[1], i3548.x)
  i3548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[2], i3548.y)
  i3548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[3], i3548.z)
  i3548.separateAxes = !!i3549[4]
  i3548.range = new pc.Vec2( i3549[5], i3549[6] )
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3550 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3551 = data
  i3550.enabled = !!i3551[0]
  i3550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[1], i3550.x)
  i3550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[2], i3550.y)
  i3550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[3], i3550.z)
  i3550.separateAxes = !!i3551[4]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3552 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3553 = data
  i3552.enabled = !!i3553[0]
  i3552.mode = i3553[1]
  i3552.animation = i3553[2]
  i3552.numTilesX = i3553[3]
  i3552.numTilesY = i3553[4]
  i3552.useRandomRow = !!i3553[5]
  i3552.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[6], i3552.frameOverTime)
  i3552.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[7], i3552.startFrame)
  i3552.cycleCount = i3553[8]
  i3552.rowIndex = i3553[9]
  i3552.flipU = i3553[10]
  i3552.flipV = i3553[11]
  i3552.spriteCount = i3553[12]
  var i3555 = i3553[13]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 2) {
  request.r(i3555[i + 0], i3555[i + 1], 2, i3554, '')
  }
  i3552.sprites = i3554
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3558 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3559 = data
  i3558.enabled = !!i3559[0]
  i3558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3559[1], i3558.x)
  i3558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3559[2], i3558.y)
  i3558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3559[3], i3558.z)
  i3558.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3559[4], i3558.speedModifier)
  i3558.space = i3559[5]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3560 = root || new pc.ParticleSystemNoise()
  var i3561 = data
  i3560.enabled = !!i3561[0]
  i3560.separateAxes = !!i3561[1]
  i3560.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[2], i3560.strengthX)
  i3560.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[3], i3560.strengthY)
  i3560.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[4], i3560.strengthZ)
  i3560.frequency = i3561[5]
  i3560.damping = !!i3561[6]
  i3560.octaveCount = i3561[7]
  i3560.octaveMultiplier = i3561[8]
  i3560.octaveScale = i3561[9]
  i3560.quality = i3561[10]
  i3560.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[11], i3560.scrollSpeed)
  i3560.scrollSpeedMultiplier = i3561[12]
  i3560.remapEnabled = !!i3561[13]
  i3560.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[14], i3560.remapX)
  i3560.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[15], i3560.remapY)
  i3560.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[16], i3560.remapZ)
  i3560.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[17], i3560.positionAmount)
  i3560.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[18], i3560.rotationAmount)
  i3560.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3561[19], i3560.sizeAmount)
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3562 = root || new pc.ParticleSystemInheritVelocity()
  var i3563 = data
  i3562.enabled = !!i3563[0]
  i3562.mode = i3563[1]
  i3562.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[2], i3562.curve)
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3564 = root || new pc.ParticleSystemForceOverLifetime()
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[1], i3564.x)
  i3564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[2], i3564.y)
  i3564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[3], i3564.z)
  i3564.space = i3565[4]
  i3564.randomized = !!i3565[5]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[1], i3566.limitX)
  i3566.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[2], i3566.limitY)
  i3566.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[3], i3566.limitZ)
  i3566.dampen = i3567[4]
  i3566.separateAxes = !!i3567[5]
  i3566.space = i3567[6]
  i3566.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[7], i3566.drag)
  i3566.multiplyDragByParticleSize = !!i3567[8]
  i3566.multiplyDragByParticleVelocity = !!i3567[9]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3569 = data
  i3568.enabled = !!i3569[0]
  request.r(i3569[1], i3569[2], 0, i3568, 'sharedMaterial')
  var i3571 = i3569[3]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 2) {
  request.r(i3571[i + 0], i3571[i + 1], 2, i3570, '')
  }
  i3568.sharedMaterials = i3570
  i3568.receiveShadows = !!i3569[4]
  i3568.shadowCastingMode = i3569[5]
  i3568.sortingLayerID = i3569[6]
  i3568.sortingOrder = i3569[7]
  i3568.lightmapIndex = i3569[8]
  i3568.lightmapSceneIndex = i3569[9]
  i3568.lightmapScaleOffset = new pc.Vec4( i3569[10], i3569[11], i3569[12], i3569[13] )
  i3568.lightProbeUsage = i3569[14]
  i3568.reflectionProbeUsage = i3569[15]
  request.r(i3569[16], i3569[17], 0, i3568, 'mesh')
  i3568.meshCount = i3569[18]
  i3568.activeVertexStreamsCount = i3569[19]
  i3568.alignment = i3569[20]
  i3568.renderMode = i3569[21]
  i3568.sortMode = i3569[22]
  i3568.lengthScale = i3569[23]
  i3568.velocityScale = i3569[24]
  i3568.cameraVelocityScale = i3569[25]
  i3568.normalDirection = i3569[26]
  i3568.sortingFudge = i3569[27]
  i3568.minParticleSize = i3569[28]
  i3568.maxParticleSize = i3569[29]
  i3568.pivot = new pc.Vec3( i3569[30], i3569[31], i3569[32] )
  request.r(i3569[33], i3569[34], 0, i3568, 'trailMaterial')
  return i3568
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i3572 = root || request.c( 'AutoDestroy' )
  var i3573 = data
  i3572.timeOut = i3573[0]
  i3572.typeDestroy = i3573[1]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3575 = data
  i3574.textureMode = i3575[0]
  i3574.alignment = i3575[1]
  i3574.widthCurve = new pc.AnimationCurve( { keys_flow: i3575[2] } )
  i3574.colorGradient = i3575[3] ? new pc.ColorGradient(i3575[3][0], i3575[3][1], i3575[3][2]) : null
  var i3577 = i3575[4]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 3) {
    i3576.push( new pc.Vec3( i3577[i + 0], i3577[i + 1], i3577[i + 2] ) );
  }
  i3574.positions = i3576
  i3574.positionCount = i3575[5]
  i3574.widthMultiplier = i3575[6]
  i3574.startWidth = i3575[7]
  i3574.endWidth = i3575[8]
  i3574.numCornerVertices = i3575[9]
  i3574.numCapVertices = i3575[10]
  i3574.useWorldSpace = !!i3575[11]
  i3574.loop = !!i3575[12]
  i3574.startColor = new pc.Color(i3575[13], i3575[14], i3575[15], i3575[16])
  i3574.endColor = new pc.Color(i3575[17], i3575[18], i3575[19], i3575[20])
  i3574.generateLightingData = !!i3575[21]
  i3574.enabled = !!i3575[22]
  request.r(i3575[23], i3575[24], 0, i3574, 'sharedMaterial')
  var i3579 = i3575[25]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 2) {
  request.r(i3579[i + 0], i3579[i + 1], 2, i3578, '')
  }
  i3574.sharedMaterials = i3578
  i3574.receiveShadows = !!i3575[26]
  i3574.shadowCastingMode = i3575[27]
  i3574.sortingLayerID = i3575[28]
  i3574.sortingOrder = i3575[29]
  i3574.lightmapIndex = i3575[30]
  i3574.lightmapSceneIndex = i3575[31]
  i3574.lightmapScaleOffset = new pc.Vec4( i3575[32], i3575[33], i3575[34], i3575[35] )
  i3574.lightProbeUsage = i3575[36]
  i3574.reflectionProbeUsage = i3575[37]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3583 = data
  i3582.name = i3583[0]
  i3582.atlasId = i3583[1]
  i3582.mipmapCount = i3583[2]
  i3582.hdr = !!i3583[3]
  i3582.size = i3583[4]
  i3582.anisoLevel = i3583[5]
  i3582.filterMode = i3583[6]
  i3582.wrapMode = i3583[7]
  var i3585 = i3583[8]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 4) {
    i3584.push( UnityEngine.Rect.MinMaxRect(i3585[i + 0], i3585[i + 1], i3585[i + 2], i3585[i + 3]) );
  }
  i3582.rects = i3584
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3589 = data
  i3588.name = i3589[0]
  i3588.index = i3589[1]
  i3588.startup = !!i3589[2]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3591 = data
  i3590.enabled = !!i3591[0]
  i3590.aspect = i3591[1]
  i3590.orthographic = !!i3591[2]
  i3590.orthographicSize = i3591[3]
  i3590.backgroundColor = new pc.Color(i3591[4], i3591[5], i3591[6], i3591[7])
  i3590.nearClipPlane = i3591[8]
  i3590.farClipPlane = i3591[9]
  i3590.fieldOfView = i3591[10]
  i3590.depth = i3591[11]
  i3590.clearFlags = i3591[12]
  i3590.cullingMask = i3591[13]
  i3590.rect = i3591[14]
  request.r(i3591[15], i3591[16], 0, i3590, 'targetTexture')
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3593 = data
  i3592.enabled = !!i3593[0]
  i3592.type = i3593[1]
  i3592.color = new pc.Color(i3593[2], i3593[3], i3593[4], i3593[5])
  i3592.cullingMask = i3593[6]
  i3592.intensity = i3593[7]
  i3592.range = i3593[8]
  i3592.spotAngle = i3593[9]
  i3592.shadows = i3593[10]
  i3592.shadowNormalBias = i3593[11]
  i3592.shadowBias = i3593[12]
  i3592.shadowStrength = i3593[13]
  i3592.lightmapBakeType = i3593[14]
  i3592.renderMode = i3593[15]
  request.r(i3593[16], i3593[17], 0, i3592, 'cookie')
  i3592.cookieSize = i3593[18]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3595 = data
  i3594.enabled = !!i3595[0]
  i3594.isTrigger = !!i3595[1]
  request.r(i3595[2], i3595[3], 0, i3594, 'material')
  request.r(i3595[4], i3595[5], 0, i3594, 'sharedMesh')
  i3594.convex = !!i3595[6]
  return i3594
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i3596 = root || request.c( 'HuggyCraft' )
  var i3597 = data
  request.r(i3597[0], i3597[1], 0, i3596, 'colliderAttack')
  request.r(i3597[2], i3597[3], 0, i3596, 'circle')
  request.r(i3597[4], i3597[5], 0, i3596, 'characterUp')
  request.r(i3597[6], i3597[7], 0, i3596, 'fxSmoke')
  i3596.charScale = new pc.Vec3( i3597[8], i3597[9], i3597[10] )
  i3596.index = i3597[11]
  i3596.isChoosed = !!i3597[12]
  request.r(i3597[13], i3597[14], 0, i3596, 'meshRenderer')
  i3596.isTargetEnemy = !!i3597[15]
  request.r(i3597[16], i3597[17], 0, i3596, 'animator')
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i3599 = data
  i3598.playAutomatically = !!i3599[0]
  request.r(i3599[1], i3599[2], 0, i3598, 'clip')
  var i3601 = i3599[3]
  var i3600 = []
  for(var i = 0; i < i3601.length; i += 2) {
  request.r(i3601[i + 0], i3601[i + 1], 2, i3600, '')
  }
  i3598.clips = i3600
  i3598.wrapMode = i3599[4]
  i3598.enabled = !!i3599[5]
  return i3598
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i3604 = root || request.c( 'BunnyBunzoCraft' )
  var i3605 = data
  request.r(i3605[0], i3605[1], 0, i3604, 'animator')
  i3604.yDie = i3605[2]
  i3604.zDie = i3605[3]
  request.r(i3605[4], i3605[5], 0, i3604, 'meshRenderer')
  request.r(i3605[6], i3605[7], 0, i3604, 'shadow')
  request.r(i3605[8], i3605[9], 0, i3604, 'prefBullet')
  return i3604
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i3606 = root || request.c( 'KillyWillyCraft' )
  var i3607 = data
  request.r(i3607[0], i3607[1], 0, i3606, 'animator')
  i3606.yDie = i3607[2]
  i3606.zDie = i3607[3]
  request.r(i3607[4], i3607[5], 0, i3606, 'meshRenderer')
  request.r(i3607[6], i3607[7], 0, i3606, 'shadow')
  request.r(i3607[8], i3607[9], 0, i3606, 'prefBullet')
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3609 = data
  i3608.pivot = new pc.Vec2( i3609[0], i3609[1] )
  i3608.anchorMin = new pc.Vec2( i3609[2], i3609[3] )
  i3608.anchorMax = new pc.Vec2( i3609[4], i3609[5] )
  i3608.sizeDelta = new pc.Vec2( i3609[6], i3609[7] )
  i3608.anchoredPosition3D = new pc.Vec3( i3609[8], i3609[9], i3609[10] )
  i3608.rotation = new pc.Quat(i3609[11], i3609[12], i3609[13], i3609[14])
  i3608.scale = new pc.Vec3( i3609[15], i3609[16], i3609[17] )
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3611 = data
  i3610.enabled = !!i3611[0]
  i3610.planeDistance = i3611[1]
  i3610.referencePixelsPerUnit = i3611[2]
  i3610.isFallbackOverlay = !!i3611[3]
  i3610.renderMode = i3611[4]
  i3610.renderOrder = i3611[5]
  i3610.sortingLayerName = i3611[6]
  i3610.sortingOrder = i3611[7]
  i3610.scaleFactor = i3611[8]
  request.r(i3611[9], i3611[10], 0, i3610, 'worldCamera')
  i3610.overrideSorting = !!i3611[11]
  i3610.pixelPerfect = !!i3611[12]
  i3610.targetDisplay = i3611[13]
  i3610.overridePixelPerfect = !!i3611[14]
  return i3610
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3613 = data
  i3612.m_UiScaleMode = i3613[0]
  i3612.m_ReferencePixelsPerUnit = i3613[1]
  i3612.m_ScaleFactor = i3613[2]
  i3612.m_ReferenceResolution = new pc.Vec2( i3613[3], i3613[4] )
  i3612.m_ScreenMatchMode = i3613[5]
  i3612.m_MatchWidthOrHeight = i3613[6]
  i3612.m_PhysicalUnit = i3613[7]
  i3612.m_FallbackScreenDPI = i3613[8]
  i3612.m_DefaultSpriteDPI = i3613[9]
  i3612.m_DynamicPixelsPerUnit = i3613[10]
  return i3612
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3615 = data
  i3614.m_IgnoreReversedGraphics = !!i3615[0]
  i3614.m_BlockingObjects = i3615[1]
  i3614.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3615[2] )
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3617 = data
  i3616.cullTransparentMesh = !!i3617[0]
  return i3616
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.UI.Image' )
  var i3619 = data
  request.r(i3619[0], i3619[1], 0, i3618, 'm_Sprite')
  i3618.m_Type = i3619[2]
  i3618.m_PreserveAspect = !!i3619[3]
  i3618.m_FillCenter = !!i3619[4]
  i3618.m_FillMethod = i3619[5]
  i3618.m_FillAmount = i3619[6]
  i3618.m_FillClockwise = !!i3619[7]
  i3618.m_FillOrigin = i3619[8]
  i3618.m_UseSpriteMesh = !!i3619[9]
  i3618.m_PixelsPerUnitMultiplier = i3619[10]
  request.r(i3619[11], i3619[12], 0, i3618, 'm_Material')
  i3618.m_Maskable = !!i3619[13]
  i3618.m_Color = new pc.Color(i3619[14], i3619[15], i3619[16], i3619[17])
  i3618.m_RaycastTarget = !!i3619[18]
  return i3618
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.UI.Button' )
  var i3621 = data
  i3620.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3621[0], i3620.m_OnClick)
  i3620.m_Navigation = request.d('UnityEngine.UI.Navigation', i3621[1], i3620.m_Navigation)
  i3620.m_Transition = i3621[2]
  i3620.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3621[3], i3620.m_Colors)
  i3620.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3621[4], i3620.m_SpriteState)
  i3620.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3621[5], i3620.m_AnimationTriggers)
  i3620.m_Interactable = !!i3621[6]
  request.r(i3621[7], i3621[8], 0, i3620, 'm_TargetGraphic')
  return i3620
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3623 = data
  i3622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3623[0], i3622.m_PersistentCalls)
  return i3622
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3625 = data
  var i3627 = i3625[0]
  var i3626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.add(request.d('UnityEngine.Events.PersistentCall', i3627[i + 0]));
  }
  i3624.m_Calls = i3626
  return i3624
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'm_Target')
  i3630.m_MethodName = i3631[2]
  i3630.m_Mode = i3631[3]
  i3630.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3631[4], i3630.m_Arguments)
  i3630.m_CallState = i3631[5]
  return i3630
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3633 = data
  i3632.m_Mode = i3633[0]
  request.r(i3633[1], i3633[2], 0, i3632, 'm_SelectOnUp')
  request.r(i3633[3], i3633[4], 0, i3632, 'm_SelectOnDown')
  request.r(i3633[5], i3633[6], 0, i3632, 'm_SelectOnLeft')
  request.r(i3633[7], i3633[8], 0, i3632, 'm_SelectOnRight')
  return i3632
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3635 = data
  i3634.m_NormalColor = new pc.Color(i3635[0], i3635[1], i3635[2], i3635[3])
  i3634.m_HighlightedColor = new pc.Color(i3635[4], i3635[5], i3635[6], i3635[7])
  i3634.m_PressedColor = new pc.Color(i3635[8], i3635[9], i3635[10], i3635[11])
  i3634.m_SelectedColor = new pc.Color(i3635[12], i3635[13], i3635[14], i3635[15])
  i3634.m_DisabledColor = new pc.Color(i3635[16], i3635[17], i3635[18], i3635[19])
  i3634.m_ColorMultiplier = i3635[20]
  i3634.m_FadeDuration = i3635[21]
  return i3634
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3637 = data
  request.r(i3637[0], i3637[1], 0, i3636, 'm_HighlightedSprite')
  request.r(i3637[2], i3637[3], 0, i3636, 'm_PressedSprite')
  request.r(i3637[4], i3637[5], 0, i3636, 'm_SelectedSprite')
  request.r(i3637[6], i3637[7], 0, i3636, 'm_DisabledSprite')
  return i3636
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3639 = data
  i3638.m_NormalTrigger = i3639[0]
  i3638.m_HighlightedTrigger = i3639[1]
  i3638.m_PressedTrigger = i3639[2]
  i3638.m_SelectedTrigger = i3639[3]
  i3638.m_DisabledTrigger = i3639[4]
  return i3638
}

Deserializers["SoundController"] = function (request, data, root) {
  var i3640 = root || request.c( 'SoundController' )
  var i3641 = data
  request.r(i3641[0], i3641[1], 0, i3640, 'audioSourceFX')
  request.r(i3641[2], i3641[3], 0, i3640, 'audioSourceBG')
  request.r(i3641[4], i3641[5], 0, i3640, 'clipChoose')
  request.r(i3641[6], i3641[7], 0, i3640, 'clipMerge')
  request.r(i3641[8], i3641[9], 0, i3640, 'clipLose')
  request.r(i3641[10], i3641[11], 0, i3640, 'clipWin')
  request.r(i3641[12], i3641[13], 0, i3640, 'clipPunch')
  request.r(i3641[14], i3641[15], 0, i3640, 'clipLightning')
  request.r(i3641[16], i3641[17], 0, i3640, 'clipFall')
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3643 = data
  request.r(i3643[0], i3643[1], 0, i3642, 'clip')
  request.r(i3643[2], i3643[3], 0, i3642, 'outputAudioMixerGroup')
  i3642.playOnAwake = !!i3643[4]
  i3642.loop = !!i3643[5]
  i3642.time = i3643[6]
  i3642.volume = i3643[7]
  i3642.pitch = i3643[8]
  i3642.enabled = !!i3643[9]
  return i3642
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i3644 = root || request.c( 'MergeHuggyCraft1' )
  var i3645 = data
  request.r(i3645[0], i3645[1], 0, i3644, 'drawLine')
  i3644.isCanDraw = !!i3645[2]
  i3644.isEndGame = !!i3645[3]
  request.r(i3645[4], i3645[5], 0, i3644, 'cameraMain')
  request.r(i3645[6], i3645[7], 0, i3644, 'soundController')
  request.r(i3645[8], i3645[9], 0, i3644, 'characterParent')
  request.r(i3645[10], i3645[11], 0, i3644, 'enemyParent')
  var i3647 = i3645[12]
  var i3646 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i3647.length; i += 2) {
  request.r(i3647[i + 0], i3647[i + 1], 1, i3646, '')
  }
  i3644.lstCharacter = i3646
  var i3649 = i3645[13]
  var i3648 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i3649.length; i += 2) {
  request.r(i3649[i + 0], i3649[i + 1], 1, i3648, '')
  }
  i3644.lstEnemy = i3648
  i3644.isMergeWin = !!i3645[14]
  i3644.totalPlayer = i3645[15]
  request.r(i3645[16], i3645[17], 0, i3644, 'enemyMerge')
  request.r(i3645[18], i3645[19], 0, i3644, 'characterParent2')
  request.r(i3645[20], i3645[21], 0, i3644, 'enemyParent2')
  request.r(i3645[22], i3645[23], 0, i3644, 'map1')
  request.r(i3645[24], i3645[25], 0, i3644, 'map2')
  request.r(i3645[26], i3645[27], 0, i3644, 'bridge1')
  request.r(i3645[28], i3645[29], 0, i3644, 'bridge2')
  i3644.countEnd = i3645[30]
  request.r(i3645[31], i3645[32], 0, i3644, 'victory')
  request.r(i3645[33], i3645[34], 0, i3644, 'lose')
  request.r(i3645[35], i3645[36], 0, i3644, 'guide')
  request.r(i3645[37], i3645[38], 0, i3644, 'guideHand')
  request.r(i3645[39], i3645[40], 0, i3644, 'guideAttack')
  request.r(i3645[41], i3645[42], 0, i3644, 'gameEndUI')
  request.r(i3645[43], i3645[44], 0, i3644, 'fightBtn')
  return i3644
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i3654 = root || request.c( 'DrawLine' )
  var i3655 = data
  var i3657 = i3655[0]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3657.length; i += 3) {
    i3656.add(new pc.Vec3( i3657[i + 0], i3657[i + 1], i3657[i + 2] ));
  }
  i3654.lstLinePoints = i3656
  request.r(i3655[1], i3655[2], 0, i3654, 'currentLine')
  i3654.lineColor = new pc.Color(i3655[3], i3655[4], i3655[5], i3655[6])
  i3654.lineWidth = i3655[7]
  i3654.timeDelay = i3655[8]
  request.r(i3655[9], i3655[10], 0, i3654, 'linePref')
  return i3654
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i3660 = root || request.c( 'ShootingRaycast' )
  var i3661 = data
  return i3660
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3663 = data
  request.r(i3663[0], i3663[1], 0, i3662, 'm_FirstSelected')
  i3662.m_sendNavigationEvents = !!i3663[2]
  i3662.m_DragThreshold = i3663[3]
  return i3662
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3665 = data
  i3664.m_HorizontalAxis = i3665[0]
  i3664.m_VerticalAxis = i3665[1]
  i3664.m_SubmitButton = i3665[2]
  i3664.m_CancelButton = i3665[3]
  i3664.m_InputActionsPerSecond = i3665[4]
  i3664.m_RepeatDelay = i3665[5]
  i3664.m_ForceModuleActive = !!i3665[6]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3667 = data
  i3666.ambientIntensity = i3667[0]
  i3666.reflectionIntensity = i3667[1]
  i3666.ambientMode = i3667[2]
  i3666.ambientLight = new pc.Color(i3667[3], i3667[4], i3667[5], i3667[6])
  i3666.ambientSkyColor = new pc.Color(i3667[7], i3667[8], i3667[9], i3667[10])
  i3666.ambientGroundColor = new pc.Color(i3667[11], i3667[12], i3667[13], i3667[14])
  i3666.ambientEquatorColor = new pc.Color(i3667[15], i3667[16], i3667[17], i3667[18])
  i3666.fogColor = new pc.Color(i3667[19], i3667[20], i3667[21], i3667[22])
  i3666.fogEndDistance = i3667[23]
  i3666.fogStartDistance = i3667[24]
  i3666.fogDensity = i3667[25]
  i3666.fog = !!i3667[26]
  request.r(i3667[27], i3667[28], 0, i3666, 'skybox')
  i3666.fogMode = i3667[29]
  var i3669 = i3667[30]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3669[i + 0]) );
  }
  i3666.lightmaps = i3668
  i3666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3667[31], i3666.lightProbes)
  i3666.lightmapsMode = i3667[32]
  i3666.environmentLightingMode = i3667[33]
  i3666.ambientProbe = new pc.SphericalHarmonicsL2(i3667[34])
  request.r(i3667[35], i3667[36], 0, i3666, 'customReflection')
  request.r(i3667[37], i3667[38], 0, i3666, 'defaultReflection')
  i3666.defaultReflectionMode = i3667[39]
  i3666.defaultReflectionResolution = i3667[40]
  i3666.sunLightObjectId = i3667[41]
  i3666.pixelLightCount = i3667[42]
  i3666.defaultReflectionHDR = !!i3667[43]
  i3666.hasLightDataAsset = !!i3667[44]
  i3666.hasManualGenerate = !!i3667[45]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3673 = data
  request.r(i3673[0], i3673[1], 0, i3672, 'lightmapColor')
  request.r(i3673[2], i3673[3], 0, i3672, 'lightmapDirection')
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3674 = root || new UnityEngine.LightProbes()
  var i3675 = data
  return i3674
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3681 = data
  i3680.useSafeMode = !!i3681[0]
  i3680.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3681[1], i3680.safeModeOptions)
  i3680.timeScale = i3681[2]
  i3680.useSmoothDeltaTime = !!i3681[3]
  i3680.maxSmoothUnscaledTime = i3681[4]
  i3680.rewindCallbackMode = i3681[5]
  i3680.showUnityEditorReport = !!i3681[6]
  i3680.logBehaviour = i3681[7]
  i3680.drawGizmos = !!i3681[8]
  i3680.defaultRecyclable = !!i3681[9]
  i3680.defaultAutoPlay = i3681[10]
  i3680.defaultUpdateType = i3681[11]
  i3680.defaultTimeScaleIndependent = !!i3681[12]
  i3680.defaultEaseType = i3681[13]
  i3680.defaultEaseOvershootOrAmplitude = i3681[14]
  i3680.defaultEasePeriod = i3681[15]
  i3680.defaultAutoKill = !!i3681[16]
  i3680.defaultLoopType = i3681[17]
  i3680.debugMode = !!i3681[18]
  i3680.debugStoreTargetId = !!i3681[19]
  i3680.showPreviewPanel = !!i3681[20]
  i3680.storeSettingsLocation = i3681[21]
  i3680.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3681[22], i3680.modules)
  i3680.createASMDEF = !!i3681[23]
  i3680.showPlayingTweens = !!i3681[24]
  i3680.showPausedTweens = !!i3681[25]
  return i3680
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3682 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3683 = data
  i3682.logBehaviour = i3683[0]
  i3682.nestedTweenFailureBehaviour = i3683[1]
  return i3682
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3684 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3685 = data
  i3684.showPanel = !!i3685[0]
  i3684.audioEnabled = !!i3685[1]
  i3684.physicsEnabled = !!i3685[2]
  i3684.physics2DEnabled = !!i3685[3]
  i3684.spriteEnabled = !!i3685[4]
  i3684.uiEnabled = !!i3685[5]
  i3684.textMeshProEnabled = !!i3685[6]
  i3684.tk2DEnabled = !!i3685[7]
  i3684.deAudioEnabled = !!i3685[8]
  i3684.deUnityExtendedEnabled = !!i3685[9]
  i3684.epoOutlineEnabled = !!i3685[10]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3687 = data
  var i3689 = i3687[0]
  var i3688 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.add(i3689[i + 0]);
  }
  i3686.invalidShaderVariants = i3688
  i3686.name = i3687[1]
  i3686.guid = i3687[2]
  var i3691 = i3687[3]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( i3691[i + 0] );
  }
  i3686.shaderDefinedKeywords = i3690
  var i3693 = i3687[4]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3693[i + 0]) );
  }
  i3686.passes = i3692
  var i3695 = i3687[5]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3695[i + 0]) );
  }
  i3686.usePasses = i3694
  var i3697 = i3687[6]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3697[i + 0]) );
  }
  i3686.defaultParameterValues = i3696
  request.r(i3687[7], i3687[8], 0, i3686, 'unityFallbackShader')
  i3686.readDepth = !!i3687[9]
  i3686.isCreatedByShaderGraph = !!i3687[10]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3704 = root || new pc.UnityShaderPass()
  var i3705 = data
  i3704.id = i3705[0]
  i3704.subShaderIndex = i3705[1]
  i3704.name = i3705[2]
  i3704.passType = i3705[3]
  i3704.usePass = !!i3705[4]
  i3704.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[5], i3704.zTest)
  i3704.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[6], i3704.zWrite)
  i3704.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[7], i3704.culling)
  i3704.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3705[8], i3704.blending)
  i3704.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3705[9], i3704.alphaBlending)
  i3704.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[10], i3704.colorWriteMask)
  i3704.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[11], i3704.offsetUnits)
  i3704.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[12], i3704.offsetFactor)
  i3704.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[13], i3704.stencilRef)
  i3704.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[14], i3704.stencilReadMask)
  i3704.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3705[15], i3704.stencilWriteMask)
  i3704.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3705[16], i3704.stencilOp)
  i3704.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3705[17], i3704.stencilOpFront)
  i3704.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3705[18], i3704.stencilOpBack)
  var i3707 = i3705[19]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3707[i + 0]) );
  }
  i3704.tags = i3706
  var i3709 = i3705[20]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( i3709[i + 0] );
  }
  i3704.passDefinedKeywords = i3708
  var i3711 = i3705[21]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3711[i + 0]) );
  }
  i3704.variants = i3710
  var i3713 = i3705[22]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3713[i + 0]) );
  }
  i3704.excludedVariants = i3712
  i3704.hasDepthReader = !!i3705[23]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3715 = data
  i3714.val = i3715[0]
  i3714.name = i3715[1]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3717 = data
  i3716.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[0], i3716.src)
  i3716.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[1], i3716.dst)
  i3716.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[2], i3716.op)
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3719 = data
  i3718.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3719[0], i3718.pass)
  i3718.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3719[1], i3718.fail)
  i3718.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3719[2], i3718.zFail)
  i3718.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3719[3], i3718.comp)
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3723 = data
  i3722.name = i3723[0]
  i3722.value = i3723[1]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3727 = data
  i3726.passId = i3727[0]
  i3726.subShaderIndex = i3727[1]
  var i3729 = i3727[2]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( i3729[i + 0] );
  }
  i3726.keywords = i3728
  i3726.vertexProgram = i3727[3]
  i3726.fragmentProgram = i3727[4]
  i3726.readDepth = !!i3727[5]
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'shader')
  i3732.pass = i3733[2]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3737 = data
  i3736.name = i3737[0]
  i3736.type = i3737[1]
  i3736.value = new pc.Vec4( i3737[2], i3737[3], i3737[4], i3737[5] )
  i3736.textureValue = i3737[6]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3739 = data
  i3738.name = i3739[0]
  request.r(i3739[1], i3739[2], 0, i3738, 'texture')
  i3738.aabb = i3739[3]
  i3738.vertices = i3739[4]
  i3738.triangles = i3739[5]
  i3738.textureRect = UnityEngine.Rect.MinMaxRect(i3739[6], i3739[7], i3739[8], i3739[9])
  i3738.packedRect = UnityEngine.Rect.MinMaxRect(i3739[10], i3739[11], i3739[12], i3739[13])
  i3738.border = new pc.Vec4( i3739[14], i3739[15], i3739[16], i3739[17] )
  i3738.transparency = i3739[18]
  i3738.bounds = i3739[19]
  i3738.pixelsPerUnit = i3739[20]
  i3738.textureWidth = i3739[21]
  i3738.textureHeight = i3739[22]
  i3738.nativeSize = new pc.Vec2( i3739[23], i3739[24] )
  i3738.pivot = new pc.Vec2( i3739[25], i3739[26] )
  i3738.textureRectOffset = new pc.Vec2( i3739[27], i3739[28] )
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3741 = data
  i3740.name = i3741[0]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3743 = data
  i3742.name = i3743[0]
  i3742.wrapMode = i3743[1]
  i3742.isLooping = !!i3743[2]
  i3742.length = i3743[3]
  var i3745 = i3743[4]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3745[i + 0]) );
  }
  i3742.curves = i3744
  var i3747 = i3743[5]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3747[i + 0]) );
  }
  i3742.events = i3746
  i3742.halfPrecision = !!i3743[6]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3751 = data
  i3750.path = i3751[0]
  i3750.componentType = i3751[1]
  i3750.property = i3751[2]
  i3750.keys = i3751[3]
  var i3753 = i3751[4]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3753[i + 0]) );
  }
  i3750.objectReferenceKeys = i3752
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3757 = data
  i3756.time = i3757[0]
  request.r(i3757[1], i3757[2], 0, i3756, 'value')
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3761 = data
  i3760.functionName = i3761[0]
  i3760.floatParameter = i3761[1]
  i3760.intParameter = i3761[2]
  i3760.stringParameter = i3761[3]
  request.r(i3761[4], i3761[5], 0, i3760, 'objectReferenceParameter')
  i3760.time = i3761[6]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3763 = data
  i3762.name = i3763[0]
  var i3765 = i3763[1]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3765[i + 0]) );
  }
  i3762.states = i3764
  var i3767 = i3763[2]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3767[i + 0]) );
  }
  i3762.layers = i3766
  var i3769 = i3763[3]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3769[i + 0]) );
  }
  i3762.parameters = i3768
  var i3771 = i3763[4]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( i3771[i + 0] );
  }
  i3762.animationClips = i3770
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3775 = data
  i3774.cycleOffset = i3775[0]
  i3774.cycleOffsetParameter = i3775[1]
  i3774.cycleOffsetParameterActive = !!i3775[2]
  i3774.mirror = !!i3775[3]
  i3774.mirrorParameter = i3775[4]
  i3774.mirrorParameterActive = !!i3775[5]
  i3774.motionId = i3775[6]
  i3774.nameHash = i3775[7]
  i3774.fullPathHash = i3775[8]
  i3774.speed = i3775[9]
  i3774.speedParameter = i3775[10]
  i3774.speedParameterActive = !!i3775[11]
  i3774.tag = i3775[12]
  i3774.name = i3775[13]
  i3774.writeDefaultValues = !!i3775[14]
  var i3777 = i3775[15]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3777[i + 0]) );
  }
  i3774.transitions = i3776
  var i3779 = i3775[16]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 2) {
  request.r(i3779[i + 0], i3779[i + 1], 2, i3778, '')
  }
  i3774.behaviours = i3778
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3783 = data
  i3782.fullPath = i3783[0]
  i3782.canTransitionToSelf = !!i3783[1]
  i3782.duration = i3783[2]
  i3782.exitTime = i3783[3]
  i3782.hasExitTime = !!i3783[4]
  i3782.hasFixedDuration = !!i3783[5]
  i3782.interruptionSource = i3783[6]
  i3782.offset = i3783[7]
  i3782.orderedInterruption = !!i3783[8]
  i3782.destinationStateNameHash = i3783[9]
  i3782.destinationStateMachineId = i3783[10]
  i3782.isExit = !!i3783[11]
  i3782.mute = !!i3783[12]
  i3782.solo = !!i3783[13]
  var i3785 = i3783[14]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3785[i + 0]) );
  }
  i3782.conditions = i3784
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3789 = data
  i3788.mode = i3789[0]
  i3788.parameter = i3789[1]
  i3788.threshold = i3789[2]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3795 = data
  i3794.blendingMode = i3795[0]
  i3794.defaultWeight = i3795[1]
  i3794.name = i3795[2]
  i3794.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3795[3], i3794.stateMachine)
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3797 = data
  i3796.id = i3797[0]
  i3796.defaultStateNameHash = i3797[1]
  var i3799 = i3797[2]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3799[i + 0]) );
  }
  i3796.entryTransitions = i3798
  var i3801 = i3797[3]
  var i3800 = []
  for(var i = 0; i < i3801.length; i += 1) {
    i3800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3801[i + 0]) );
  }
  i3796.anyStateTransitions = i3800
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3805 = data
  i3804.destinationStateNameHash = i3805[0]
  i3804.destinationStateMachineId = i3805[1]
  i3804.isExit = !!i3805[2]
  i3804.mute = !!i3805[3]
  i3804.solo = !!i3805[4]
  var i3807 = i3805[5]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3807[i + 0]) );
  }
  i3804.conditions = i3806
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3811 = data
  i3810.defaultBool = !!i3811[0]
  i3810.defaultFloat = i3811[1]
  i3810.defaultInt = i3811[2]
  i3810.name = i3811[3]
  i3810.nameHash = i3811[4]
  i3810.type = i3811[5]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3813 = data
  var i3815 = i3813[0]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3815[i + 0]) );
  }
  i3812.files = i3814
  i3812.componentToPrefabIds = i3813[1]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3819 = data
  i3818.path = i3819[0]
  request.r(i3819[1], i3819[2], 0, i3818, 'unityObject')
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3821 = data
  var i3823 = i3821[0]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3823[i + 0]) );
  }
  i3820.scriptsExecutionOrder = i3822
  var i3825 = i3821[1]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3825[i + 0]) );
  }
  i3820.sortingLayers = i3824
  var i3827 = i3821[2]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3827[i + 0]) );
  }
  i3820.cullingLayers = i3826
  i3820.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3821[3], i3820.timeSettings)
  i3820.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3821[4], i3820.physicsSettings)
  i3820.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3821[5], i3820.physics2DSettings)
  i3820.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3821[6], i3820.qualitySettings)
  i3820.removeShadows = !!i3821[7]
  i3820.autoInstantiatePrefabs = !!i3821[8]
  i3820.enableAutoInstancing = !!i3821[9]
  i3820.lightmapEncodingQuality = i3821[10]
  i3820.desiredColorSpace = i3821[11]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3831 = data
  i3830.name = i3831[0]
  i3830.value = i3831[1]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3835 = data
  i3834.id = i3835[0]
  i3834.name = i3835[1]
  i3834.value = i3835[2]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3839 = data
  i3838.id = i3839[0]
  i3838.name = i3839[1]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3841 = data
  i3840.fixedDeltaTime = i3841[0]
  i3840.maximumDeltaTime = i3841[1]
  i3840.timeScale = i3841[2]
  i3840.maximumParticleTimestep = i3841[3]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3843 = data
  i3842.gravity = new pc.Vec3( i3843[0], i3843[1], i3843[2] )
  i3842.defaultSolverIterations = i3843[3]
  i3842.bounceThreshold = i3843[4]
  i3842.autoSyncTransforms = !!i3843[5]
  i3842.autoSimulation = !!i3843[6]
  var i3845 = i3843[7]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3845[i + 0]) );
  }
  i3842.collisionMatrix = i3844
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3849 = data
  i3848.enabled = !!i3849[0]
  i3848.layerId = i3849[1]
  i3848.otherLayerId = i3849[2]
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'material')
  i3850.gravity = new pc.Vec2( i3851[2], i3851[3] )
  i3850.positionIterations = i3851[4]
  i3850.velocityIterations = i3851[5]
  i3850.velocityThreshold = i3851[6]
  i3850.maxLinearCorrection = i3851[7]
  i3850.maxAngularCorrection = i3851[8]
  i3850.maxTranslationSpeed = i3851[9]
  i3850.maxRotationSpeed = i3851[10]
  i3850.timeToSleep = i3851[11]
  i3850.linearSleepTolerance = i3851[12]
  i3850.angularSleepTolerance = i3851[13]
  i3850.defaultContactOffset = i3851[14]
  i3850.autoSimulation = !!i3851[15]
  i3850.queriesHitTriggers = !!i3851[16]
  i3850.queriesStartInColliders = !!i3851[17]
  i3850.callbacksOnDisable = !!i3851[18]
  i3850.reuseCollisionCallbacks = !!i3851[19]
  i3850.autoSyncTransforms = !!i3851[20]
  var i3853 = i3851[21]
  var i3852 = []
  for(var i = 0; i < i3853.length; i += 1) {
    i3852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3853[i + 0]) );
  }
  i3850.collisionMatrix = i3852
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3857 = data
  i3856.enabled = !!i3857[0]
  i3856.layerId = i3857[1]
  i3856.otherLayerId = i3857[2]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3861[i + 0]) );
  }
  i3858.qualityLevels = i3860
  var i3863 = i3859[1]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( i3863[i + 0] );
  }
  i3858.names = i3862
  i3858.shadows = i3859[2]
  i3858.anisotropicFiltering = i3859[3]
  i3858.antiAliasing = i3859[4]
  i3858.lodBias = i3859[5]
  i3858.shadowCascades = i3859[6]
  i3858.shadowDistance = i3859[7]
  i3858.shadowmaskMode = i3859[8]
  i3858.shadowProjection = i3859[9]
  i3858.shadowResolution = i3859[10]
  i3858.softParticles = !!i3859[11]
  i3858.softVegetation = !!i3859[12]
  i3858.activeColorSpace = i3859[13]
  i3858.desiredColorSpace = i3859[14]
  i3858.masterTextureLimit = i3859[15]
  i3858.maxQueuedFrames = i3859[16]
  i3858.particleRaycastBudget = i3859[17]
  i3858.pixelLightCount = i3859[18]
  i3858.realtimeReflectionProbes = !!i3859[19]
  i3858.shadowCascade2Split = i3859[20]
  i3858.shadowCascade4Split = new pc.Vec3( i3859[21], i3859[22], i3859[23] )
  i3858.streamingMipmapsActive = !!i3859[24]
  i3858.vSyncCount = i3859[25]
  i3858.asyncUploadBufferSize = i3859[26]
  i3858.asyncUploadTimeSlice = i3859[27]
  i3858.billboardsFaceCameraPosition = !!i3859[28]
  i3858.shadowNearPlaneOffset = i3859[29]
  i3858.streamingMipmapsMemoryBudget = i3859[30]
  i3858.maximumLODLevel = i3859[31]
  i3858.streamingMipmapsAddAllCameras = !!i3859[32]
  i3858.streamingMipmapsMaxLevelReduction = i3859[33]
  i3858.streamingMipmapsRenderersPerFrame = i3859[34]
  i3858.resolutionScalingFixedDPIFactor = i3859[35]
  i3858.streamingMipmapsMaxFileIORequests = i3859[36]
  i3858.currentQualityLevel = i3859[37]
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3869 = data
  i3868.weight = i3869[0]
  i3868.vertices = i3869[1]
  i3868.normals = i3869[2]
  i3868.tangents = i3869[3]
  return i3868
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, 'm_ObjectArgument')
  i3870.m_ObjectArgumentAssemblyTypeName = i3871[2]
  i3870.m_IntArgument = i3871[3]
  i3870.m_FloatArgument = i3871[4]
  i3870.m_StringArgument = i3871[5]
  i3870.m_BoolArgument = !!i3871[6]
  return i3870
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

Deserializers.buildID = "03077f7c-439e-4ff4-8e05-d111526df75c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

