var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSpring' )
  var i485 = data
  i484.spring = i485[0]
  i484.damper = i485[1]
  i484.targetPosition = i485[2]
  return i484
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor' )
  var i487 = data
  i486.m_TargetVelocity = i487[0]
  i486.m_Force = i487[1]
  i486.m_FreeSpin = i487[2]
  return i486
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointLimits' )
  var i489 = data
  i488.m_Min = i489[0]
  i488.m_Max = i489[1]
  i488.m_Bounciness = i489[2]
  i488.m_BounceMinVelocity = i489[3]
  i488.m_ContactDistance = i489[4]
  i488.minBounce = i489[5]
  i488.maxBounce = i489[6]
  return i488
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointDrive' )
  var i491 = data
  i490.m_PositionSpring = i491[0]
  i490.m_PositionDamper = i491[1]
  i490.m_MaximumForce = i491[2]
  return i490
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i493 = data
  i492.m_Spring = i493[0]
  i492.m_Damper = i493[1]
  return i492
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i495 = data
  i494.m_Limit = i495[0]
  i494.m_Bounciness = i495[1]
  i494.m_ContactDistance = i495[2]
  return i494
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i497 = data
  i496.m_ExtremumSlip = i497[0]
  i496.m_ExtremumValue = i497[1]
  i496.m_AsymptoteSlip = i497[2]
  i496.m_AsymptoteValue = i497[3]
  i496.m_Stiffness = i497[4]
  return i496
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i499 = data
  i498.m_LowerAngle = i499[0]
  i498.m_UpperAngle = i499[1]
  return i498
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i501 = data
  i500.m_MotorSpeed = i501[0]
  i500.m_MaximumMotorTorque = i501[1]
  return i500
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i503 = data
  i502.m_DampingRatio = i503[0]
  i502.m_Frequency = i503[1]
  i502.m_Angle = i503[2]
  return i502
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i505 = data
  i504.m_LowerTranslation = i505[0]
  i504.m_UpperTranslation = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i539 = data
  i538.name = i539[0]
  i538.halfPrecision = !!i539[1]
  i538.vertexCount = i539[2]
  i538.aabb = i539[3]
  var i541 = i539[4]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( !!i541[i + 0] );
  }
  i538.streams = i540
  i538.vertices = i539[5]
  var i543 = i539[6]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i543[i + 0]) );
  }
  i538.subMeshes = i542
  var i545 = i539[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 16) {
    i544.push( new pc.Mat4().setData(i545[i + 0], i545[i + 1], i545[i + 2], i545[i + 3],  i545[i + 4], i545[i + 5], i545[i + 6], i545[i + 7],  i545[i + 8], i545[i + 9], i545[i + 10], i545[i + 11],  i545[i + 12], i545[i + 13], i545[i + 14], i545[i + 15]) );
  }
  i538.bindposes = i544
  var i547 = i539[8]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i547[i + 0]) );
  }
  i538.blendShapes = i546
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i553 = data
  i552.triangles = i553[0]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i559 = data
  i558.name = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i561[i + 0]) );
  }
  i558.frames = i560
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i563 = data
  i562.name = i563[0]
  i562.width = i563[1]
  i562.height = i563[2]
  i562.mipmapCount = i563[3]
  i562.anisoLevel = i563[4]
  i562.filterMode = i563[5]
  i562.hdr = !!i563[6]
  i562.format = i563[7]
  i562.wrapMode = i563[8]
  i562.alphaIsTransparency = !!i563[9]
  i562.alphaSource = i563[10]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i565 = data
  i564.position = new pc.Vec3( i565[0], i565[1], i565[2] )
  i564.scale = new pc.Vec3( i565[3], i565[4], i565[5] )
  i564.rotation = new pc.Quat(i565[6], i565[7], i565[8], i565[9])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'animatorController')
  i566.updateMode = i567[2]
  var i569 = i567[3]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.humanBones = i568
  i566.enabled = !!i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i573 = data
  i572.center = new pc.Vec3( i573[0], i573[1], i573[2] )
  i572.size = new pc.Vec3( i573[3], i573[4], i573[5] )
  i572.enabled = !!i573[6]
  i572.isTrigger = !!i573[7]
  request.r(i573[8], i573[9], 0, i572, 'material')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i575 = data
  i574.mass = i575[0]
  i574.drag = i575[1]
  i574.angularDrag = i575[2]
  i574.useGravity = !!i575[3]
  i574.isKinematic = !!i575[4]
  i574.constraints = i575[5]
  i574.maxAngularVelocity = i575[6]
  i574.collisionDetectionMode = i575[7]
  i574.interpolation = i575[8]
  return i574
}

Deserializers["HumanCraft"] = function (request, data, root) {
  var i576 = root || request.c( 'HumanCraft' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'colliderAttack')
  request.r(i577[2], i577[3], 0, i576, 'hand')
  request.r(i577[4], i577[5], 0, i576, 'head')
  request.r(i577[6], i577[7], 0, i576, 'circle')
  request.r(i577[8], i577[9], 0, i576, 'characterUp')
  request.r(i577[10], i577[11], 0, i576, 'fxSmoke')
  i576.charScale = new pc.Vec3( i577[12], i577[13], i577[14] )
  i576.index = i577[15]
  i576.isChoosed = !!i577[16]
  request.r(i577[17], i577[18], 0, i576, 'meshRenderer')
  i576.isTargetEnemy = !!i577[19]
  request.r(i577[20], i577[21], 0, i576, 'animator')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i579 = data
  i578.enabled = !!i579[0]
  request.r(i579[1], i579[2], 0, i578, 'sharedMaterial')
  var i581 = i579[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.sharedMaterials = i580
  i578.receiveShadows = !!i579[4]
  i578.shadowCastingMode = i579[5]
  i578.sortingLayerID = i579[6]
  i578.sortingOrder = i579[7]
  i578.lightmapIndex = i579[8]
  i578.lightmapSceneIndex = i579[9]
  i578.lightmapScaleOffset = new pc.Vec4( i579[10], i579[11], i579[12], i579[13] )
  i578.lightProbeUsage = i579[14]
  i578.reflectionProbeUsage = i579[15]
  request.r(i579[16], i579[17], 0, i578, 'sharedMesh')
  var i583 = i579[18]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i578.bones = i582
  i578.updateWhenOffscreen = !!i579[19]
  i578.localBounds = i579[20]
  request.r(i579[21], i579[22], 0, i578, 'rootBone')
  var i585 = i579[23]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i585[i + 0]) );
  }
  i578.blendShapesWeights = i584
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i591 = data
  i590.weight = i591[0]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i593 = data
  i592.name = i593[0]
  i592.tag = i593[1]
  i592.enabled = !!i593[2]
  i592.isStatic = !!i593[3]
  i592.layer = i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'sharedMesh')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'additionalVertexStreams')
  i596.enabled = !!i597[2]
  request.r(i597[3], i597[4], 0, i596, 'sharedMaterial')
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sharedMaterials = i598
  i596.receiveShadows = !!i597[6]
  i596.shadowCastingMode = i597[7]
  i596.sortingLayerID = i597[8]
  i596.sortingOrder = i597[9]
  i596.lightmapIndex = i597[10]
  i596.lightmapSceneIndex = i597[11]
  i596.lightmapScaleOffset = new pc.Vec4( i597[12], i597[13], i597[14], i597[15] )
  i596.lightProbeUsage = i597[16]
  i596.reflectionProbeUsage = i597[17]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i601 = data
  i600.enabled = !!i601[0]
  request.r(i601[1], i601[2], 0, i600, 'sharedMaterial')
  var i603 = i601[3]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.sharedMaterials = i602
  i600.receiveShadows = !!i601[4]
  i600.shadowCastingMode = i601[5]
  i600.sortingLayerID = i601[6]
  i600.sortingOrder = i601[7]
  i600.lightmapIndex = i601[8]
  i600.lightmapSceneIndex = i601[9]
  i600.lightmapScaleOffset = new pc.Vec4( i601[10], i601[11], i601[12], i601[13] )
  i600.lightProbeUsage = i601[14]
  i600.reflectionProbeUsage = i601[15]
  i600.color = new pc.Color(i601[16], i601[17], i601[18], i601[19])
  request.r(i601[20], i601[21], 0, i600, 'sprite')
  i600.flipX = !!i601[22]
  i600.flipY = !!i601[23]
  i600.drawMode = i601[24]
  i600.size = new pc.Vec2( i601[25], i601[26] )
  i600.tileMode = i601[27]
  i600.adaptiveModeThreshold = i601[28]
  i600.maskInteraction = i601[29]
  i600.spriteSortPoint = i601[30]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i605 = data
  i604.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i605[0], i604.main)
  i604.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i605[1], i604.colorBySpeed)
  i604.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i605[2], i604.colorOverLifetime)
  i604.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i605[3], i604.emission)
  i604.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i605[4], i604.rotationBySpeed)
  i604.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i605[5], i604.rotationOverLifetime)
  i604.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i605[6], i604.shape)
  i604.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i605[7], i604.sizeBySpeed)
  i604.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i605[8], i604.sizeOverLifetime)
  i604.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i605[9], i604.textureSheetAnimation)
  i604.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i605[10], i604.velocityOverLifetime)
  i604.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i605[11], i604.noise)
  i604.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i605[12], i604.inheritVelocity)
  i604.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i605[13], i604.forceOverLifetime)
  i604.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i605[14], i604.limitVelocityOverLifetime)
  i604.useAutoRandomSeed = !!i605[15]
  i604.randomSeed = i605[16]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemMain()
  var i607 = data
  i606.duration = i607[0]
  i606.loop = !!i607[1]
  i606.prewarm = !!i607[2]
  i606.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.startDelay)
  i606.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[4], i606.startLifetime)
  i606.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[5], i606.startSpeed)
  i606.startSize3D = !!i607[6]
  i606.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[7], i606.startSizeX)
  i606.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[8], i606.startSizeY)
  i606.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[9], i606.startSizeZ)
  i606.startRotation3D = !!i607[10]
  i606.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[11], i606.startRotationX)
  i606.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[12], i606.startRotationY)
  i606.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[13], i606.startRotationZ)
  i606.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i607[14], i606.startColor)
  i606.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[15], i606.gravityModifier)
  i606.simulationSpace = i607[16]
  request.r(i607[17], i607[18], 0, i606, 'customSimulationSpace')
  i606.simulationSpeed = i607[19]
  i606.useUnscaledTime = !!i607[20]
  i606.scalingMode = i607[21]
  i606.playOnAwake = !!i607[22]
  i606.maxParticles = i607[23]
  i606.emitterVelocityMode = i607[24]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i608 = root || new pc.MinMaxCurve()
  var i609 = data
  i608.mode = i609[0]
  i608.curveMin = new pc.AnimationCurve( { keys_flow: i609[1] } )
  i608.curveMax = new pc.AnimationCurve( { keys_flow: i609[2] } )
  i608.curveMultiplier = i609[3]
  i608.constantMin = i609[4]
  i608.constantMax = i609[5]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i610 = root || new pc.MinMaxGradient()
  var i611 = data
  i610.mode = i611[0]
  i610.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i611[1], i610.gradientMin)
  i610.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i611[2], i610.gradientMax)
  i610.colorMin = new pc.Color(i611[3], i611[4], i611[5], i611[6])
  i610.colorMax = new pc.Color(i611[7], i611[8], i611[9], i611[10])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i613 = data
  i612.mode = i613[0]
  var i615 = i613[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i615[i + 0]) );
  }
  i612.colorKeys = i614
  var i617 = i613[2]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i617[i + 0]) );
  }
  i612.alphaKeys = i616
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemColorBySpeed()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[1], i618.color)
  i618.range = new pc.Vec2( i619[2], i619[3] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i623 = data
  i622.color = new pc.Color(i623[0], i623[1], i623[2], i623[3])
  i622.time = i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i627 = data
  i626.alpha = i627[0]
  i626.time = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemColorOverLifetime()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i629[1], i628.color)
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemEmitter()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.rateOverTime)
  i630.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.rateOverDistance)
  var i633 = i631[3]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i633[i + 0]) );
  }
  i630.bursts = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemBurst()
  var i637 = data
  i636.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[0], i636.count)
  i636.cycleCount = i637[1]
  i636.minCount = i637[2]
  i636.maxCount = i637[3]
  i636.repeatInterval = i637[4]
  i636.time = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemRotationBySpeed()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.separateAxes = !!i639[4]
  i638.range = new pc.Vec2( i639[5], i639[6] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemRotationOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemShape()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.shapeType = i643[1]
  i642.randomDirectionAmount = i643[2]
  i642.sphericalDirectionAmount = i643[3]
  i642.randomPositionAmount = i643[4]
  i642.alignToDirection = !!i643[5]
  i642.radius = i643[6]
  i642.radiusMode = i643[7]
  i642.radiusSpread = i643[8]
  i642.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[9], i642.radiusSpeed)
  i642.radiusThickness = i643[10]
  i642.angle = i643[11]
  i642.length = i643[12]
  i642.boxThickness = new pc.Vec3( i643[13], i643[14], i643[15] )
  i642.meshShapeType = i643[16]
  request.r(i643[17], i643[18], 0, i642, 'mesh')
  request.r(i643[19], i643[20], 0, i642, 'meshRenderer')
  request.r(i643[21], i643[22], 0, i642, 'skinnedMeshRenderer')
  i642.useMeshMaterialIndex = !!i643[23]
  i642.meshMaterialIndex = i643[24]
  i642.useMeshColors = !!i643[25]
  i642.normalOffset = i643[26]
  i642.arc = i643[27]
  i642.arcMode = i643[28]
  i642.arcSpread = i643[29]
  i642.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[30], i642.arcSpeed)
  i642.donutRadius = i643[31]
  i642.position = new pc.Vec3( i643[32], i643[33], i643[34] )
  i642.rotation = new pc.Vec3( i643[35], i643[36], i643[37] )
  i642.scale = new pc.Vec3( i643[38], i643[39], i643[40] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemSizeBySpeed()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.separateAxes = !!i645[4]
  i644.range = new pc.Vec2( i645[5], i645[6] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemSizeOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.separateAxes = !!i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.mode = i649[1]
  i648.animation = i649[2]
  i648.numTilesX = i649[3]
  i648.numTilesY = i649[4]
  i648.useRandomRow = !!i649[5]
  i648.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[6], i648.frameOverTime)
  i648.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[7], i648.startFrame)
  i648.cycleCount = i649[8]
  i648.rowIndex = i649[9]
  i648.flipU = i649[10]
  i648.flipV = i649[11]
  i648.spriteCount = i649[12]
  var i651 = i649[13]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.sprites = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.x)
  i654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.y)
  i654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.z)
  i654.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[4], i654.speedModifier)
  i654.space = i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemNoise()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.separateAxes = !!i657[1]
  i656.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.strengthX)
  i656.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.strengthY)
  i656.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.strengthZ)
  i656.frequency = i657[5]
  i656.damping = !!i657[6]
  i656.octaveCount = i657[7]
  i656.octaveMultiplier = i657[8]
  i656.octaveScale = i657[9]
  i656.quality = i657[10]
  i656.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[11], i656.scrollSpeed)
  i656.scrollSpeedMultiplier = i657[12]
  i656.remapEnabled = !!i657[13]
  i656.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[14], i656.remapX)
  i656.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[15], i656.remapY)
  i656.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[16], i656.remapZ)
  i656.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[17], i656.positionAmount)
  i656.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[18], i656.rotationAmount)
  i656.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[19], i656.sizeAmount)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemInheritVelocity()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.mode = i659[1]
  i658.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.curve)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemForceOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.space = i661[4]
  i660.randomized = !!i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.limitX)
  i662.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.limitY)
  i662.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.limitZ)
  i662.dampen = i663[4]
  i662.separateAxes = !!i663[5]
  i662.space = i663[6]
  i662.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[7], i662.drag)
  i662.multiplyDragByParticleSize = !!i663[8]
  i662.multiplyDragByParticleVelocity = !!i663[9]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i665 = data
  i664.enabled = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'sharedMaterial')
  var i667 = i665[3]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[4]
  i664.shadowCastingMode = i665[5]
  i664.sortingLayerID = i665[6]
  i664.sortingOrder = i665[7]
  i664.lightmapIndex = i665[8]
  i664.lightmapSceneIndex = i665[9]
  i664.lightmapScaleOffset = new pc.Vec4( i665[10], i665[11], i665[12], i665[13] )
  i664.lightProbeUsage = i665[14]
  i664.reflectionProbeUsage = i665[15]
  request.r(i665[16], i665[17], 0, i664, 'mesh')
  i664.meshCount = i665[18]
  i664.activeVertexStreamsCount = i665[19]
  i664.alignment = i665[20]
  i664.renderMode = i665[21]
  i664.sortMode = i665[22]
  i664.lengthScale = i665[23]
  i664.velocityScale = i665[24]
  i664.cameraVelocityScale = i665[25]
  i664.normalDirection = i665[26]
  i664.sortingFudge = i665[27]
  i664.minParticleSize = i665[28]
  i664.maxParticleSize = i665[29]
  i664.pivot = new pc.Vec3( i665[30], i665[31], i665[32] )
  request.r(i665[33], i665[34], 0, i664, 'trailMaterial')
  return i664
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i668 = root || request.c( 'AutoDestroy' )
  var i669 = data
  i668.timeOut = i669[0]
  i668.typeDestroy = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i671 = data
  i670.textureMode = i671[0]
  i670.alignment = i671[1]
  i670.widthCurve = new pc.AnimationCurve( { keys_flow: i671[2] } )
  i670.colorGradient = i671[3] ? new pc.ColorGradient(i671[3][0], i671[3][1], i671[3][2]) : null
  var i673 = i671[4]
  var i672 = []
  for(var i = 0; i < i673.length; i += 3) {
    i672.push( new pc.Vec3( i673[i + 0], i673[i + 1], i673[i + 2] ) );
  }
  i670.positions = i672
  i670.positionCount = i671[5]
  i670.widthMultiplier = i671[6]
  i670.startWidth = i671[7]
  i670.endWidth = i671[8]
  i670.numCornerVertices = i671[9]
  i670.numCapVertices = i671[10]
  i670.useWorldSpace = !!i671[11]
  i670.loop = !!i671[12]
  i670.startColor = new pc.Color(i671[13], i671[14], i671[15], i671[16])
  i670.endColor = new pc.Color(i671[17], i671[18], i671[19], i671[20])
  i670.generateLightingData = !!i671[21]
  i670.enabled = !!i671[22]
  request.r(i671[23], i671[24], 0, i670, 'sharedMaterial')
  var i675 = i671[25]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i670.sharedMaterials = i674
  i670.receiveShadows = !!i671[26]
  i670.shadowCastingMode = i671[27]
  i670.sortingLayerID = i671[28]
  i670.sortingOrder = i671[29]
  i670.lightmapIndex = i671[30]
  i670.lightmapSceneIndex = i671[31]
  i670.lightmapScaleOffset = new pc.Vec4( i671[32], i671[33], i671[34], i671[35] )
  i670.lightProbeUsage = i671[36]
  i670.reflectionProbeUsage = i671[37]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i679 = data
  i678.name = i679[0]
  i678.atlasId = i679[1]
  i678.mipmapCount = i679[2]
  i678.hdr = !!i679[3]
  i678.size = i679[4]
  i678.anisoLevel = i679[5]
  i678.filterMode = i679[6]
  i678.wrapMode = i679[7]
  var i681 = i679[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 4) {
    i680.push( UnityEngine.Rect.MinMaxRect(i681[i + 0], i681[i + 1], i681[i + 2], i681[i + 3]) );
  }
  i678.rects = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i685 = data
  i684.name = i685[0]
  i684.index = i685[1]
  i684.startup = !!i685[2]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i687 = data
  i686.enabled = !!i687[0]
  i686.aspect = i687[1]
  i686.orthographic = !!i687[2]
  i686.orthographicSize = i687[3]
  i686.backgroundColor = new pc.Color(i687[4], i687[5], i687[6], i687[7])
  i686.nearClipPlane = i687[8]
  i686.farClipPlane = i687[9]
  i686.fieldOfView = i687[10]
  i686.depth = i687[11]
  i686.clearFlags = i687[12]
  i686.cullingMask = i687[13]
  i686.rect = i687[14]
  request.r(i687[15], i687[16], 0, i686, 'targetTexture')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.type = i689[1]
  i688.color = new pc.Color(i689[2], i689[3], i689[4], i689[5])
  i688.cullingMask = i689[6]
  i688.intensity = i689[7]
  i688.range = i689[8]
  i688.spotAngle = i689[9]
  i688.shadows = i689[10]
  i688.shadowNormalBias = i689[11]
  i688.shadowBias = i689[12]
  i688.shadowStrength = i689[13]
  i688.lightmapBakeType = i689[14]
  i688.renderMode = i689[15]
  request.r(i689[16], i689[17], 0, i688, 'cookie')
  i688.cookieSize = i689[18]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i691 = data
  i690.enabled = !!i691[0]
  i690.isTrigger = !!i691[1]
  request.r(i691[2], i691[3], 0, i690, 'material')
  request.r(i691[4], i691[5], 0, i690, 'sharedMesh')
  i690.convex = !!i691[6]
  return i690
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i692 = root || request.c( 'HuggyCraft' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'colliderAttack')
  request.r(i693[2], i693[3], 0, i692, 'circle')
  request.r(i693[4], i693[5], 0, i692, 'characterUp')
  request.r(i693[6], i693[7], 0, i692, 'fxSmoke')
  i692.charScale = new pc.Vec3( i693[8], i693[9], i693[10] )
  i692.index = i693[11]
  i692.isChoosed = !!i693[12]
  request.r(i693[13], i693[14], 0, i692, 'meshRenderer')
  i692.isTargetEnemy = !!i693[15]
  request.r(i693[16], i693[17], 0, i692, 'animator')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i695 = data
  i694.playAutomatically = !!i695[0]
  request.r(i695[1], i695[2], 0, i694, 'clip')
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.clips = i696
  i694.wrapMode = i695[4]
  i694.enabled = !!i695[5]
  return i694
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i700 = root || request.c( 'BunnyBunzoCraft' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'animator')
  i700.yDie = i701[2]
  i700.zDie = i701[3]
  request.r(i701[4], i701[5], 0, i700, 'meshRenderer')
  request.r(i701[6], i701[7], 0, i700, 'shadow')
  request.r(i701[8], i701[9], 0, i700, 'prefBullet')
  return i700
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i702 = root || request.c( 'KillyWillyCraft' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'animator')
  i702.yDie = i703[2]
  i702.zDie = i703[3]
  request.r(i703[4], i703[5], 0, i702, 'meshRenderer')
  request.r(i703[6], i703[7], 0, i702, 'shadow')
  request.r(i703[8], i703[9], 0, i702, 'prefBullet')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i705 = data
  i704.pivot = new pc.Vec2( i705[0], i705[1] )
  i704.anchorMin = new pc.Vec2( i705[2], i705[3] )
  i704.anchorMax = new pc.Vec2( i705[4], i705[5] )
  i704.sizeDelta = new pc.Vec2( i705[6], i705[7] )
  i704.anchoredPosition3D = new pc.Vec3( i705[8], i705[9], i705[10] )
  i704.rotation = new pc.Quat(i705[11], i705[12], i705[13], i705[14])
  i704.scale = new pc.Vec3( i705[15], i705[16], i705[17] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.planeDistance = i707[1]
  i706.referencePixelsPerUnit = i707[2]
  i706.isFallbackOverlay = !!i707[3]
  i706.renderMode = i707[4]
  i706.renderOrder = i707[5]
  i706.sortingLayerName = i707[6]
  i706.sortingOrder = i707[7]
  i706.scaleFactor = i707[8]
  request.r(i707[9], i707[10], 0, i706, 'worldCamera')
  i706.overrideSorting = !!i707[11]
  i706.pixelPerfect = !!i707[12]
  i706.targetDisplay = i707[13]
  i706.overridePixelPerfect = !!i707[14]
  return i706
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i709 = data
  i708.m_UiScaleMode = i709[0]
  i708.m_ReferencePixelsPerUnit = i709[1]
  i708.m_ScaleFactor = i709[2]
  i708.m_ReferenceResolution = new pc.Vec2( i709[3], i709[4] )
  i708.m_ScreenMatchMode = i709[5]
  i708.m_MatchWidthOrHeight = i709[6]
  i708.m_PhysicalUnit = i709[7]
  i708.m_FallbackScreenDPI = i709[8]
  i708.m_DefaultSpriteDPI = i709[9]
  i708.m_DynamicPixelsPerUnit = i709[10]
  return i708
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i711 = data
  i710.m_IgnoreReversedGraphics = !!i711[0]
  i710.m_BlockingObjects = i711[1]
  i710.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i711[2] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i713 = data
  i712.cullTransparentMesh = !!i713[0]
  return i712
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Image' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_Sprite')
  i714.m_Type = i715[2]
  i714.m_PreserveAspect = !!i715[3]
  i714.m_FillCenter = !!i715[4]
  i714.m_FillMethod = i715[5]
  i714.m_FillAmount = i715[6]
  i714.m_FillClockwise = !!i715[7]
  i714.m_FillOrigin = i715[8]
  i714.m_UseSpriteMesh = !!i715[9]
  i714.m_PixelsPerUnitMultiplier = i715[10]
  request.r(i715[11], i715[12], 0, i714, 'm_Material')
  i714.m_Maskable = !!i715[13]
  i714.m_Color = new pc.Color(i715[14], i715[15], i715[16], i715[17])
  i714.m_RaycastTarget = !!i715[18]
  return i714
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button' )
  var i717 = data
  i716.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i717[0], i716.m_OnClick)
  i716.m_Navigation = request.d('UnityEngine.UI.Navigation', i717[1], i716.m_Navigation)
  i716.m_Transition = i717[2]
  i716.m_Colors = request.d('UnityEngine.UI.ColorBlock', i717[3], i716.m_Colors)
  i716.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i717[4], i716.m_SpriteState)
  i716.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i717[5], i716.m_AnimationTriggers)
  i716.m_Interactable = !!i717[6]
  request.r(i717[7], i717[8], 0, i716, 'm_TargetGraphic')
  return i716
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('UnityEngine.Events.PersistentCall', i723[i + 0]));
  }
  i720.m_Calls = i722
  return i720
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Target')
  i726.m_MethodName = i727[2]
  i726.m_Mode = i727[3]
  i726.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i727[4], i726.m_Arguments)
  i726.m_CallState = i727[5]
  return i726
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i729 = data
  i728.m_Mode = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'm_SelectOnUp')
  request.r(i729[3], i729[4], 0, i728, 'm_SelectOnDown')
  request.r(i729[5], i729[6], 0, i728, 'm_SelectOnLeft')
  request.r(i729[7], i729[8], 0, i728, 'm_SelectOnRight')
  return i728
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i731 = data
  i730.m_NormalColor = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.m_HighlightedColor = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.m_PressedColor = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  i730.m_SelectedColor = new pc.Color(i731[12], i731[13], i731[14], i731[15])
  i730.m_DisabledColor = new pc.Color(i731[16], i731[17], i731[18], i731[19])
  i730.m_ColorMultiplier = i731[20]
  i730.m_FadeDuration = i731[21]
  return i730
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_HighlightedSprite')
  request.r(i733[2], i733[3], 0, i732, 'm_PressedSprite')
  request.r(i733[4], i733[5], 0, i732, 'm_SelectedSprite')
  request.r(i733[6], i733[7], 0, i732, 'm_DisabledSprite')
  return i732
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i735 = data
  i734.m_NormalTrigger = i735[0]
  i734.m_HighlightedTrigger = i735[1]
  i734.m_PressedTrigger = i735[2]
  i734.m_SelectedTrigger = i735[3]
  i734.m_DisabledTrigger = i735[4]
  return i734
}

Deserializers["SoundController"] = function (request, data, root) {
  var i736 = root || request.c( 'SoundController' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'audioSourceFX')
  request.r(i737[2], i737[3], 0, i736, 'audioSourceBG')
  request.r(i737[4], i737[5], 0, i736, 'clipChoose')
  request.r(i737[6], i737[7], 0, i736, 'clipMerge')
  request.r(i737[8], i737[9], 0, i736, 'clipLose')
  request.r(i737[10], i737[11], 0, i736, 'clipWin')
  request.r(i737[12], i737[13], 0, i736, 'clipPunch')
  request.r(i737[14], i737[15], 0, i736, 'clipLightning')
  request.r(i737[16], i737[17], 0, i736, 'clipFall')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'clip')
  request.r(i739[2], i739[3], 0, i738, 'outputAudioMixerGroup')
  i738.playOnAwake = !!i739[4]
  i738.loop = !!i739[5]
  i738.time = i739[6]
  i738.volume = i739[7]
  i738.pitch = i739[8]
  i738.enabled = !!i739[9]
  return i738
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i740 = root || request.c( 'MergeHuggyCraft1' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'drawLine')
  i740.isCanDraw = !!i741[2]
  i740.isEndGame = !!i741[3]
  request.r(i741[4], i741[5], 0, i740, 'cameraMain')
  request.r(i741[6], i741[7], 0, i740, 'soundController')
  request.r(i741[8], i741[9], 0, i740, 'characterParent')
  request.r(i741[10], i741[11], 0, i740, 'enemyParent')
  var i743 = i741[12]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i740.lstCharacter = i742
  var i745 = i741[13]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 1, i744, '')
  }
  i740.lstEnemy = i744
  i740.isMergeWin = !!i741[14]
  i740.totalPlayer = i741[15]
  request.r(i741[16], i741[17], 0, i740, 'enemyMerge')
  request.r(i741[18], i741[19], 0, i740, 'characterParent2')
  request.r(i741[20], i741[21], 0, i740, 'enemyParent2')
  request.r(i741[22], i741[23], 0, i740, 'map1')
  request.r(i741[24], i741[25], 0, i740, 'map2')
  request.r(i741[26], i741[27], 0, i740, 'bridge1')
  request.r(i741[28], i741[29], 0, i740, 'bridge2')
  i740.countEnd = i741[30]
  request.r(i741[31], i741[32], 0, i740, 'victory')
  request.r(i741[33], i741[34], 0, i740, 'lose')
  request.r(i741[35], i741[36], 0, i740, 'guide')
  request.r(i741[37], i741[38], 0, i740, 'guideHand')
  request.r(i741[39], i741[40], 0, i740, 'guideAttack')
  request.r(i741[41], i741[42], 0, i740, 'gameEndUI')
  request.r(i741[43], i741[44], 0, i740, 'fightBtn')
  return i740
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i750 = root || request.c( 'DrawLine' )
  var i751 = data
  var i753 = i751[0]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i753.length; i += 3) {
    i752.add(new pc.Vec3( i753[i + 0], i753[i + 1], i753[i + 2] ));
  }
  i750.lstLinePoints = i752
  request.r(i751[1], i751[2], 0, i750, 'currentLine')
  i750.lineColor = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.lineWidth = i751[7]
  i750.timeDelay = i751[8]
  request.r(i751[9], i751[10], 0, i750, 'linePref')
  return i750
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i756 = root || request.c( 'ShootingRaycast' )
  var i757 = data
  return i756
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_FirstSelected')
  i758.m_sendNavigationEvents = !!i759[2]
  i758.m_DragThreshold = i759[3]
  return i758
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i761 = data
  i760.m_HorizontalAxis = i761[0]
  i760.m_VerticalAxis = i761[1]
  i760.m_SubmitButton = i761[2]
  i760.m_CancelButton = i761[3]
  i760.m_InputActionsPerSecond = i761[4]
  i760.m_RepeatDelay = i761[5]
  i760.m_ForceModuleActive = !!i761[6]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i763 = data
  i762.ambientIntensity = i763[0]
  i762.reflectionIntensity = i763[1]
  i762.ambientMode = i763[2]
  i762.ambientLight = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.ambientSkyColor = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  i762.ambientGroundColor = new pc.Color(i763[11], i763[12], i763[13], i763[14])
  i762.ambientEquatorColor = new pc.Color(i763[15], i763[16], i763[17], i763[18])
  i762.fogColor = new pc.Color(i763[19], i763[20], i763[21], i763[22])
  i762.fogEndDistance = i763[23]
  i762.fogStartDistance = i763[24]
  i762.fogDensity = i763[25]
  i762.fog = !!i763[26]
  request.r(i763[27], i763[28], 0, i762, 'skybox')
  i762.fogMode = i763[29]
  var i765 = i763[30]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i765[i + 0]) );
  }
  i762.lightmaps = i764
  i762.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i763[31], i762.lightProbes)
  i762.lightmapsMode = i763[32]
  i762.environmentLightingMode = i763[33]
  i762.ambientProbe = new pc.SphericalHarmonicsL2(i763[34])
  request.r(i763[35], i763[36], 0, i762, 'customReflection')
  request.r(i763[37], i763[38], 0, i762, 'defaultReflection')
  i762.defaultReflectionMode = i763[39]
  i762.defaultReflectionResolution = i763[40]
  i762.sunLightObjectId = i763[41]
  i762.pixelLightCount = i763[42]
  i762.defaultReflectionHDR = !!i763[43]
  i762.hasLightDataAsset = !!i763[44]
  i762.hasManualGenerate = !!i763[45]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'lightmapColor')
  request.r(i769[2], i769[3], 0, i768, 'lightmapDirection')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i770 = root || new UnityEngine.LightProbes()
  var i771 = data
  return i770
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i777 = data
  i776.useSafeMode = !!i777[0]
  i776.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i777[1], i776.safeModeOptions)
  i776.timeScale = i777[2]
  i776.useSmoothDeltaTime = !!i777[3]
  i776.maxSmoothUnscaledTime = i777[4]
  i776.rewindCallbackMode = i777[5]
  i776.showUnityEditorReport = !!i777[6]
  i776.logBehaviour = i777[7]
  i776.drawGizmos = !!i777[8]
  i776.defaultRecyclable = !!i777[9]
  i776.defaultAutoPlay = i777[10]
  i776.defaultUpdateType = i777[11]
  i776.defaultTimeScaleIndependent = !!i777[12]
  i776.defaultEaseType = i777[13]
  i776.defaultEaseOvershootOrAmplitude = i777[14]
  i776.defaultEasePeriod = i777[15]
  i776.defaultAutoKill = !!i777[16]
  i776.defaultLoopType = i777[17]
  i776.debugMode = !!i777[18]
  i776.debugStoreTargetId = !!i777[19]
  i776.showPreviewPanel = !!i777[20]
  i776.storeSettingsLocation = i777[21]
  i776.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i777[22], i776.modules)
  i776.createASMDEF = !!i777[23]
  i776.showPlayingTweens = !!i777[24]
  i776.showPausedTweens = !!i777[25]
  return i776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i779 = data
  i778.logBehaviour = i779[0]
  i778.nestedTweenFailureBehaviour = i779[1]
  return i778
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i780 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i781 = data
  i780.showPanel = !!i781[0]
  i780.audioEnabled = !!i781[1]
  i780.physicsEnabled = !!i781[2]
  i780.physics2DEnabled = !!i781[3]
  i780.spriteEnabled = !!i781[4]
  i780.uiEnabled = !!i781[5]
  i780.textMeshProEnabled = !!i781[6]
  i780.tk2DEnabled = !!i781[7]
  i780.deAudioEnabled = !!i781[8]
  i780.deUnityExtendedEnabled = !!i781[9]
  i780.epoOutlineEnabled = !!i781[10]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(i785[i + 0]);
  }
  i782.invalidShaderVariants = i784
  i782.name = i783[1]
  i782.guid = i783[2]
  var i787 = i783[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i782.shaderDefinedKeywords = i786
  var i789 = i783[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i789[i + 0]) );
  }
  i782.passes = i788
  var i791 = i783[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i791[i + 0]) );
  }
  i782.usePasses = i790
  var i793 = i783[6]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i793[i + 0]) );
  }
  i782.defaultParameterValues = i792
  request.r(i783[7], i783[8], 0, i782, 'unityFallbackShader')
  i782.readDepth = !!i783[9]
  i782.isCreatedByShaderGraph = !!i783[10]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i800 = root || new pc.UnityShaderPass()
  var i801 = data
  i800.id = i801[0]
  i800.subShaderIndex = i801[1]
  i800.name = i801[2]
  i800.passType = i801[3]
  i800.usePass = !!i801[4]
  i800.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[5], i800.zTest)
  i800.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[6], i800.zWrite)
  i800.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[7], i800.culling)
  i800.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[8], i800.blending)
  i800.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[9], i800.alphaBlending)
  i800.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[10], i800.colorWriteMask)
  i800.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[11], i800.offsetUnits)
  i800.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[12], i800.offsetFactor)
  i800.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[13], i800.stencilRef)
  i800.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[14], i800.stencilReadMask)
  i800.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[15], i800.stencilWriteMask)
  i800.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[16], i800.stencilOp)
  i800.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[17], i800.stencilOpFront)
  i800.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[18], i800.stencilOpBack)
  var i803 = i801[19]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i803[i + 0]) );
  }
  i800.tags = i802
  var i805 = i801[20]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.passDefinedKeywords = i804
  var i807 = i801[21]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i800.variants = i806
  var i809 = i801[22]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i809[i + 0]) );
  }
  i800.excludedVariants = i808
  i800.hasDepthReader = !!i801[23]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i811 = data
  i810.val = i811[0]
  i810.name = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i813 = data
  i812.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.src)
  i812.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.dst)
  i812.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.op)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i815 = data
  i814.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[0], i814.pass)
  i814.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[1], i814.fail)
  i814.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[2], i814.zFail)
  i814.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[3], i814.comp)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i819 = data
  i818.name = i819[0]
  i818.value = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i823 = data
  i822.passId = i823[0]
  i822.subShaderIndex = i823[1]
  var i825 = i823[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.keywords = i824
  i822.vertexProgram = i823[3]
  i822.fragmentProgram = i823[4]
  i822.readDepth = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'shader')
  i828.pass = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i833 = data
  i832.name = i833[0]
  i832.type = i833[1]
  i832.value = new pc.Vec4( i833[2], i833[3], i833[4], i833[5] )
  i832.textureValue = i833[6]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i835 = data
  i834.name = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'texture')
  i834.aabb = i835[3]
  i834.vertices = i835[4]
  i834.triangles = i835[5]
  i834.textureRect = UnityEngine.Rect.MinMaxRect(i835[6], i835[7], i835[8], i835[9])
  i834.packedRect = UnityEngine.Rect.MinMaxRect(i835[10], i835[11], i835[12], i835[13])
  i834.border = new pc.Vec4( i835[14], i835[15], i835[16], i835[17] )
  i834.transparency = i835[18]
  i834.bounds = i835[19]
  i834.pixelsPerUnit = i835[20]
  i834.textureWidth = i835[21]
  i834.textureHeight = i835[22]
  i834.nativeSize = new pc.Vec2( i835[23], i835[24] )
  i834.pivot = new pc.Vec2( i835[25], i835[26] )
  i834.textureRectOffset = new pc.Vec2( i835[27], i835[28] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i837 = data
  i836.name = i837[0]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i839 = data
  i838.name = i839[0]
  i838.wrapMode = i839[1]
  i838.isLooping = !!i839[2]
  i838.length = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i841[i + 0]) );
  }
  i838.curves = i840
  var i843 = i839[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i843[i + 0]) );
  }
  i838.events = i842
  i838.halfPrecision = !!i839[6]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i847 = data
  i846.path = i847[0]
  i846.componentType = i847[1]
  i846.property = i847[2]
  i846.keys = i847[3]
  var i849 = i847[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i849[i + 0]) );
  }
  i846.objectReferenceKeys = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i853 = data
  i852.time = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'value')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i857 = data
  i856.functionName = i857[0]
  i856.floatParameter = i857[1]
  i856.intParameter = i857[2]
  i856.stringParameter = i857[3]
  request.r(i857[4], i857[5], 0, i856, 'objectReferenceParameter')
  i856.time = i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i861[i + 0]) );
  }
  i858.states = i860
  var i863 = i859[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i863[i + 0]) );
  }
  i858.layers = i862
  var i865 = i859[3]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i865[i + 0]) );
  }
  i858.parameters = i864
  var i867 = i859[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i858.animationClips = i866
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i871 = data
  i870.cycleOffset = i871[0]
  i870.cycleOffsetParameter = i871[1]
  i870.cycleOffsetParameterActive = !!i871[2]
  i870.mirror = !!i871[3]
  i870.mirrorParameter = i871[4]
  i870.mirrorParameterActive = !!i871[5]
  i870.motionId = i871[6]
  i870.nameHash = i871[7]
  i870.fullPathHash = i871[8]
  i870.speed = i871[9]
  i870.speedParameter = i871[10]
  i870.speedParameterActive = !!i871[11]
  i870.tag = i871[12]
  i870.name = i871[13]
  i870.writeDefaultValues = !!i871[14]
  var i873 = i871[15]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i873[i + 0]) );
  }
  i870.transitions = i872
  var i875 = i871[16]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.behaviours = i874
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i879 = data
  i878.fullPath = i879[0]
  i878.canTransitionToSelf = !!i879[1]
  i878.duration = i879[2]
  i878.exitTime = i879[3]
  i878.hasExitTime = !!i879[4]
  i878.hasFixedDuration = !!i879[5]
  i878.interruptionSource = i879[6]
  i878.offset = i879[7]
  i878.orderedInterruption = !!i879[8]
  i878.destinationStateNameHash = i879[9]
  i878.destinationStateMachineId = i879[10]
  i878.isExit = !!i879[11]
  i878.mute = !!i879[12]
  i878.solo = !!i879[13]
  var i881 = i879[14]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i881[i + 0]) );
  }
  i878.conditions = i880
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i885 = data
  i884.mode = i885[0]
  i884.parameter = i885[1]
  i884.threshold = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i891 = data
  i890.blendingMode = i891[0]
  i890.defaultWeight = i891[1]
  i890.name = i891[2]
  i890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i891[3], i890.stateMachine)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i893 = data
  i892.id = i893[0]
  i892.defaultStateNameHash = i893[1]
  var i895 = i893[2]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i895[i + 0]) );
  }
  i892.entryTransitions = i894
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i897[i + 0]) );
  }
  i892.anyStateTransitions = i896
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i901 = data
  i900.destinationStateNameHash = i901[0]
  i900.destinationStateMachineId = i901[1]
  i900.isExit = !!i901[2]
  i900.mute = !!i901[3]
  i900.solo = !!i901[4]
  var i903 = i901[5]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i903[i + 0]) );
  }
  i900.conditions = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i907 = data
  i906.defaultBool = !!i907[0]
  i906.defaultFloat = i907[1]
  i906.defaultInt = i907[2]
  i906.name = i907[3]
  i906.nameHash = i907[4]
  i906.type = i907[5]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i911[i + 0]) );
  }
  i908.files = i910
  i908.componentToPrefabIds = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i915 = data
  i914.path = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'unityObject')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i919[i + 0]) );
  }
  i916.scriptsExecutionOrder = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i921[i + 0]) );
  }
  i916.sortingLayers = i920
  var i923 = i917[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i923[i + 0]) );
  }
  i916.cullingLayers = i922
  i916.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i917[3], i916.timeSettings)
  i916.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i917[4], i916.physicsSettings)
  i916.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i917[5], i916.physics2DSettings)
  i916.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i917[6], i916.qualitySettings)
  i916.removeShadows = !!i917[7]
  i916.autoInstantiatePrefabs = !!i917[8]
  i916.enableAutoInstancing = !!i917[9]
  i916.lightmapEncodingQuality = i917[10]
  i916.desiredColorSpace = i917[11]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i927 = data
  i926.name = i927[0]
  i926.value = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i931 = data
  i930.id = i931[0]
  i930.name = i931[1]
  i930.value = i931[2]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i937 = data
  i936.fixedDeltaTime = i937[0]
  i936.maximumDeltaTime = i937[1]
  i936.timeScale = i937[2]
  i936.maximumParticleTimestep = i937[3]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i939 = data
  i938.gravity = new pc.Vec3( i939[0], i939[1], i939[2] )
  i938.defaultSolverIterations = i939[3]
  i938.bounceThreshold = i939[4]
  i938.autoSyncTransforms = !!i939[5]
  i938.autoSimulation = !!i939[6]
  var i941 = i939[7]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'material')
  i946.gravity = new pc.Vec2( i947[2], i947[3] )
  i946.positionIterations = i947[4]
  i946.velocityIterations = i947[5]
  i946.velocityThreshold = i947[6]
  i946.maxLinearCorrection = i947[7]
  i946.maxAngularCorrection = i947[8]
  i946.maxTranslationSpeed = i947[9]
  i946.maxRotationSpeed = i947[10]
  i946.timeToSleep = i947[11]
  i946.linearSleepTolerance = i947[12]
  i946.angularSleepTolerance = i947[13]
  i946.defaultContactOffset = i947[14]
  i946.autoSimulation = !!i947[15]
  i946.queriesHitTriggers = !!i947[16]
  i946.queriesStartInColliders = !!i947[17]
  i946.callbacksOnDisable = !!i947[18]
  i946.reuseCollisionCallbacks = !!i947[19]
  i946.autoSyncTransforms = !!i947[20]
  var i949 = i947[21]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i949[i + 0]) );
  }
  i946.collisionMatrix = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i953 = data
  i952.enabled = !!i953[0]
  i952.layerId = i953[1]
  i952.otherLayerId = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i957[i + 0]) );
  }
  i954.qualityLevels = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.names = i958
  i954.shadows = i955[2]
  i954.anisotropicFiltering = i955[3]
  i954.antiAliasing = i955[4]
  i954.lodBias = i955[5]
  i954.shadowCascades = i955[6]
  i954.shadowDistance = i955[7]
  i954.shadowmaskMode = i955[8]
  i954.shadowProjection = i955[9]
  i954.shadowResolution = i955[10]
  i954.softParticles = !!i955[11]
  i954.softVegetation = !!i955[12]
  i954.activeColorSpace = i955[13]
  i954.desiredColorSpace = i955[14]
  i954.masterTextureLimit = i955[15]
  i954.maxQueuedFrames = i955[16]
  i954.particleRaycastBudget = i955[17]
  i954.pixelLightCount = i955[18]
  i954.realtimeReflectionProbes = !!i955[19]
  i954.shadowCascade2Split = i955[20]
  i954.shadowCascade4Split = new pc.Vec3( i955[21], i955[22], i955[23] )
  i954.streamingMipmapsActive = !!i955[24]
  i954.vSyncCount = i955[25]
  i954.asyncUploadBufferSize = i955[26]
  i954.asyncUploadTimeSlice = i955[27]
  i954.billboardsFaceCameraPosition = !!i955[28]
  i954.shadowNearPlaneOffset = i955[29]
  i954.streamingMipmapsMemoryBudget = i955[30]
  i954.maximumLODLevel = i955[31]
  i954.streamingMipmapsAddAllCameras = !!i955[32]
  i954.streamingMipmapsMaxLevelReduction = i955[33]
  i954.streamingMipmapsRenderersPerFrame = i955[34]
  i954.resolutionScalingFixedDPIFactor = i955[35]
  i954.streamingMipmapsMaxFileIORequests = i955[36]
  i954.currentQualityLevel = i955[37]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i965 = data
  i964.weight = i965[0]
  i964.vertices = i965[1]
  i964.normals = i965[2]
  i964.tangents = i965[3]
  return i964
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'm_ObjectArgument')
  i966.m_ObjectArgumentAssemblyTypeName = i967[2]
  i966.m_IntArgument = i967[3]
  i966.m_FloatArgument = i967[4]
  i966.m_StringArgument = i967[5]
  i966.m_BoolArgument = !!i967[6]
  return i966
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

Deserializers.buildID = "a3b0bead-3374-49b8-949a-2f0b1a2c6d93";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

