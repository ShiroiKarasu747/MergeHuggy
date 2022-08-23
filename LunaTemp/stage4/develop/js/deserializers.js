var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSpring' )
  var i493 = data
  i492.spring = i493[0]
  i492.damper = i493[1]
  i492.targetPosition = i493[2]
  return i492
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointMotor' )
  var i495 = data
  i494.m_TargetVelocity = i495[0]
  i494.m_Force = i495[1]
  i494.m_FreeSpin = i495[2]
  return i494
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointLimits' )
  var i497 = data
  i496.m_Min = i497[0]
  i496.m_Max = i497[1]
  i496.m_Bounciness = i497[2]
  i496.m_BounceMinVelocity = i497[3]
  i496.m_ContactDistance = i497[4]
  i496.minBounce = i497[5]
  i496.maxBounce = i497[6]
  return i496
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointDrive' )
  var i499 = data
  i498.m_PositionSpring = i499[0]
  i498.m_PositionDamper = i499[1]
  i498.m_MaximumForce = i499[2]
  return i498
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i501 = data
  i500.m_Spring = i501[0]
  i500.m_Damper = i501[1]
  return i500
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i503 = data
  i502.m_Limit = i503[0]
  i502.m_Bounciness = i503[1]
  i502.m_ContactDistance = i503[2]
  return i502
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i505 = data
  i504.m_ExtremumSlip = i505[0]
  i504.m_ExtremumValue = i505[1]
  i504.m_AsymptoteSlip = i505[2]
  i504.m_AsymptoteValue = i505[3]
  i504.m_Stiffness = i505[4]
  return i504
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i507 = data
  i506.m_LowerAngle = i507[0]
  i506.m_UpperAngle = i507[1]
  return i506
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i509 = data
  i508.m_MotorSpeed = i509[0]
  i508.m_MaximumMotorTorque = i509[1]
  return i508
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i511 = data
  i510.m_DampingRatio = i511[0]
  i510.m_Frequency = i511[1]
  i510.m_Angle = i511[2]
  return i510
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i513 = data
  i512.m_LowerTranslation = i513[0]
  i512.m_UpperTranslation = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i514 = root || new pc.UnityMaterial()
  var i515 = data
  i514.name = i515[0]
  request.r(i515[1], i515[2], 0, i514, 'shader')
  i514.renderQueue = i515[3]
  i514.enableInstancing = !!i515[4]
  var i517 = i515[5]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i517[i + 0]) );
  }
  i514.floatParameters = i516
  var i519 = i515[6]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i519[i + 0]) );
  }
  i514.colorParameters = i518
  var i521 = i515[7]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i521[i + 0]) );
  }
  i514.vectorParameters = i520
  var i523 = i515[8]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i523[i + 0]) );
  }
  i514.textureParameters = i522
  var i525 = i515[9]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i525[i + 0]) );
  }
  i514.materialFlags = i524
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = new pc.Color(i533[1], i533[2], i533[3], i533[4])
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Vec4( i537[1], i537[2], i537[3], i537[4] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'value')
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i545 = data
  i544.name = i545[0]
  i544.enabled = !!i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i547 = data
  i546.name = i547[0]
  i546.halfPrecision = !!i547[1]
  i546.vertexCount = i547[2]
  i546.aabb = i547[3]
  var i549 = i547[4]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( !!i549[i + 0] );
  }
  i546.streams = i548
  i546.vertices = i547[5]
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i551[i + 0]) );
  }
  i546.subMeshes = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 16) {
    i552.push( new pc.Mat4().setData(i553[i + 0], i553[i + 1], i553[i + 2], i553[i + 3],  i553[i + 4], i553[i + 5], i553[i + 6], i553[i + 7],  i553[i + 8], i553[i + 9], i553[i + 10], i553[i + 11],  i553[i + 12], i553[i + 13], i553[i + 14], i553[i + 15]) );
  }
  i546.bindposes = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i555[i + 0]) );
  }
  i546.blendShapes = i554
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i561 = data
  i560.triangles = i561[0]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i567 = data
  i566.name = i567[0]
  var i569 = i567[1]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i569[i + 0]) );
  }
  i566.frames = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i571 = data
  i570.name = i571[0]
  i570.width = i571[1]
  i570.height = i571[2]
  i570.mipmapCount = i571[3]
  i570.anisoLevel = i571[4]
  i570.filterMode = i571[5]
  i570.hdr = !!i571[6]
  i570.format = i571[7]
  i570.wrapMode = i571[8]
  i570.alphaIsTransparency = !!i571[9]
  i570.alphaSource = i571[10]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i573 = data
  i572.position = new pc.Vec3( i573[0], i573[1], i573[2] )
  i572.scale = new pc.Vec3( i573[3], i573[4], i573[5] )
  i572.rotation = new pc.Quat(i573[6], i573[7], i573[8], i573[9])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'animatorController')
  i574.updateMode = i575[2]
  var i577 = i575[3]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.humanBones = i576
  i574.enabled = !!i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i581 = data
  i580.center = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.size = new pc.Vec3( i581[3], i581[4], i581[5] )
  i580.enabled = !!i581[6]
  i580.isTrigger = !!i581[7]
  request.r(i581[8], i581[9], 0, i580, 'material')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i583 = data
  i582.mass = i583[0]
  i582.drag = i583[1]
  i582.angularDrag = i583[2]
  i582.useGravity = !!i583[3]
  i582.isKinematic = !!i583[4]
  i582.constraints = i583[5]
  i582.maxAngularVelocity = i583[6]
  i582.collisionDetectionMode = i583[7]
  i582.interpolation = i583[8]
  return i582
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i584 = root || request.c( 'HuggyCraft' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'colliderAttack')
  request.r(i585[2], i585[3], 0, i584, 'circle')
  request.r(i585[4], i585[5], 0, i584, 'characterUp')
  request.r(i585[6], i585[7], 0, i584, 'fxSmoke')
  i584.charScale = new pc.Vec3( i585[8], i585[9], i585[10] )
  i584.index = i585[11]
  i584.isChoosed = !!i585[12]
  request.r(i585[13], i585[14], 0, i584, 'meshRenderer')
  var i587 = i585[15]
  var i586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 1, i586, '')
  }
  i584.meshRenderers = i586
  i584.isTargetEnemy = !!i585[16]
  request.r(i585[17], i585[18], 0, i584, 'animator')
  i584.maxDist = i585[19]
  i584.minDist = i585[20]
  i584.spinRate = i585[21]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i591 = data
  i590.name = i591[0]
  i590.tag = i591[1]
  i590.enabled = !!i591[2]
  i590.isStatic = !!i591[3]
  i590.layer = i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i593 = data
  i592.enabled = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'sharedMaterial')
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sharedMaterials = i594
  i592.receiveShadows = !!i593[4]
  i592.shadowCastingMode = i593[5]
  i592.sortingLayerID = i593[6]
  i592.sortingOrder = i593[7]
  i592.lightmapIndex = i593[8]
  i592.lightmapSceneIndex = i593[9]
  i592.lightmapScaleOffset = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  i592.lightProbeUsage = i593[14]
  i592.reflectionProbeUsage = i593[15]
  request.r(i593[16], i593[17], 0, i592, 'sharedMesh')
  var i597 = i593[18]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i592.bones = i596
  i592.updateWhenOffscreen = !!i593[19]
  i592.localBounds = i593[20]
  request.r(i593[21], i593[22], 0, i592, 'rootBone')
  var i599 = i593[23]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i599[i + 0]) );
  }
  i592.blendShapesWeights = i598
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i605 = data
  i604.weight = i605[0]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i607 = data
  i606.enabled = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'sharedMaterial')
  var i609 = i607[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.sharedMaterials = i608
  i606.receiveShadows = !!i607[4]
  i606.shadowCastingMode = i607[5]
  i606.sortingLayerID = i607[6]
  i606.sortingOrder = i607[7]
  i606.lightmapIndex = i607[8]
  i606.lightmapSceneIndex = i607[9]
  i606.lightmapScaleOffset = new pc.Vec4( i607[10], i607[11], i607[12], i607[13] )
  i606.lightProbeUsage = i607[14]
  i606.reflectionProbeUsage = i607[15]
  i606.color = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  request.r(i607[20], i607[21], 0, i606, 'sprite')
  i606.flipX = !!i607[22]
  i606.flipY = !!i607[23]
  i606.drawMode = i607[24]
  i606.size = new pc.Vec2( i607[25], i607[26] )
  i606.tileMode = i607[27]
  i606.adaptiveModeThreshold = i607[28]
  i606.maskInteraction = i607[29]
  i606.spriteSortPoint = i607[30]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i611 = data
  i610.playAutomatically = !!i611[0]
  request.r(i611[1], i611[2], 0, i610, 'clip')
  var i613 = i611[3]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.clips = i612
  i610.wrapMode = i611[4]
  i610.enabled = !!i611[5]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i617 = data
  i616.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i617[0], i616.main)
  i616.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i617[1], i616.colorBySpeed)
  i616.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i617[2], i616.colorOverLifetime)
  i616.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i617[3], i616.emission)
  i616.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i617[4], i616.rotationBySpeed)
  i616.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i617[5], i616.rotationOverLifetime)
  i616.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i617[6], i616.shape)
  i616.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i617[7], i616.sizeBySpeed)
  i616.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i617[8], i616.sizeOverLifetime)
  i616.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i617[9], i616.textureSheetAnimation)
  i616.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i617[10], i616.velocityOverLifetime)
  i616.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i617[11], i616.noise)
  i616.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i617[12], i616.inheritVelocity)
  i616.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i617[13], i616.forceOverLifetime)
  i616.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i617[14], i616.limitVelocityOverLifetime)
  i616.useAutoRandomSeed = !!i617[15]
  i616.randomSeed = i617[16]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemMain()
  var i619 = data
  i618.duration = i619[0]
  i618.loop = !!i619[1]
  i618.prewarm = !!i619[2]
  i618.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[3], i618.startDelay)
  i618.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[4], i618.startLifetime)
  i618.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[5], i618.startSpeed)
  i618.startSize3D = !!i619[6]
  i618.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[7], i618.startSizeX)
  i618.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[8], i618.startSizeY)
  i618.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[9], i618.startSizeZ)
  i618.startRotation3D = !!i619[10]
  i618.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[11], i618.startRotationX)
  i618.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[12], i618.startRotationY)
  i618.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[13], i618.startRotationZ)
  i618.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[14], i618.startColor)
  i618.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[15], i618.gravityModifier)
  i618.simulationSpace = i619[16]
  request.r(i619[17], i619[18], 0, i618, 'customSimulationSpace')
  i618.simulationSpeed = i619[19]
  i618.useUnscaledTime = !!i619[20]
  i618.scalingMode = i619[21]
  i618.playOnAwake = !!i619[22]
  i618.maxParticles = i619[23]
  i618.emitterVelocityMode = i619[24]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i620 = root || new pc.MinMaxCurve()
  var i621 = data
  i620.mode = i621[0]
  i620.curveMin = new pc.AnimationCurve( { keys_flow: i621[1] } )
  i620.curveMax = new pc.AnimationCurve( { keys_flow: i621[2] } )
  i620.curveMultiplier = i621[3]
  i620.constantMin = i621[4]
  i620.constantMax = i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i622 = root || new pc.MinMaxGradient()
  var i623 = data
  i622.mode = i623[0]
  i622.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i623[1], i622.gradientMin)
  i622.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i623[2], i622.gradientMax)
  i622.colorMin = new pc.Color(i623[3], i623[4], i623[5], i623[6])
  i622.colorMax = new pc.Color(i623[7], i623[8], i623[9], i623[10])
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i625 = data
  i624.mode = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i627[i + 0]) );
  }
  i624.colorKeys = i626
  var i629 = i625[2]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i629[i + 0]) );
  }
  i624.alphaKeys = i628
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemColorBySpeed()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i631[1], i630.color)
  i630.range = new pc.Vec2( i631[2], i631[3] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i635 = data
  i634.color = new pc.Color(i635[0], i635[1], i635[2], i635[3])
  i634.time = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i639 = data
  i638.alpha = i639[0]
  i638.time = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemColorOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i641[1], i640.color)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemEmitter()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.rateOverTime)
  i642.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.rateOverDistance)
  var i645 = i643[3]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i645[i + 0]) );
  }
  i642.bursts = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemBurst()
  var i649 = data
  i648.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[0], i648.count)
  i648.cycleCount = i649[1]
  i648.minCount = i649[2]
  i648.maxCount = i649[3]
  i648.repeatInterval = i649[4]
  i648.time = i649[5]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemRotationBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.separateAxes = !!i651[4]
  i650.range = new pc.Vec2( i651[5], i651[6] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemRotationOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.x)
  i652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.y)
  i652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.z)
  i652.separateAxes = !!i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemShape()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.shapeType = i655[1]
  i654.randomDirectionAmount = i655[2]
  i654.sphericalDirectionAmount = i655[3]
  i654.randomPositionAmount = i655[4]
  i654.alignToDirection = !!i655[5]
  i654.radius = i655[6]
  i654.radiusMode = i655[7]
  i654.radiusSpread = i655[8]
  i654.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[9], i654.radiusSpeed)
  i654.radiusThickness = i655[10]
  i654.angle = i655[11]
  i654.length = i655[12]
  i654.boxThickness = new pc.Vec3( i655[13], i655[14], i655[15] )
  i654.meshShapeType = i655[16]
  request.r(i655[17], i655[18], 0, i654, 'mesh')
  request.r(i655[19], i655[20], 0, i654, 'meshRenderer')
  request.r(i655[21], i655[22], 0, i654, 'skinnedMeshRenderer')
  i654.useMeshMaterialIndex = !!i655[23]
  i654.meshMaterialIndex = i655[24]
  i654.useMeshColors = !!i655[25]
  i654.normalOffset = i655[26]
  i654.arc = i655[27]
  i654.arcMode = i655[28]
  i654.arcSpread = i655[29]
  i654.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[30], i654.arcSpeed)
  i654.donutRadius = i655[31]
  i654.position = new pc.Vec3( i655[32], i655[33], i655[34] )
  i654.rotation = new pc.Vec3( i655[35], i655[36], i655[37] )
  i654.scale = new pc.Vec3( i655[38], i655[39], i655[40] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemSizeBySpeed()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.separateAxes = !!i657[4]
  i656.range = new pc.Vec2( i657[5], i657[6] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemSizeOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.mode = i661[1]
  i660.animation = i661[2]
  i660.numTilesX = i661[3]
  i660.numTilesY = i661[4]
  i660.useRandomRow = !!i661[5]
  i660.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[6], i660.frameOverTime)
  i660.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.startFrame)
  i660.cycleCount = i661[8]
  i660.rowIndex = i661[9]
  i660.flipU = i661[10]
  i660.flipV = i661[11]
  i660.spriteCount = i661[12]
  var i663 = i661[13]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sprites = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[4], i666.speedModifier)
  i666.space = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemNoise()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.separateAxes = !!i669[1]
  i668.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.strengthX)
  i668.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.strengthY)
  i668.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[4], i668.strengthZ)
  i668.frequency = i669[5]
  i668.damping = !!i669[6]
  i668.octaveCount = i669[7]
  i668.octaveMultiplier = i669[8]
  i668.octaveScale = i669[9]
  i668.quality = i669[10]
  i668.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[11], i668.scrollSpeed)
  i668.scrollSpeedMultiplier = i669[12]
  i668.remapEnabled = !!i669[13]
  i668.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[14], i668.remapX)
  i668.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[15], i668.remapY)
  i668.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[16], i668.remapZ)
  i668.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[17], i668.positionAmount)
  i668.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[18], i668.rotationAmount)
  i668.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[19], i668.sizeAmount)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemInheritVelocity()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.mode = i671[1]
  i670.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.curve)
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemForceOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.space = i673[4]
  i672.randomized = !!i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.limitX)
  i674.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.limitY)
  i674.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.limitZ)
  i674.dampen = i675[4]
  i674.separateAxes = !!i675[5]
  i674.space = i675[6]
  i674.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[7], i674.drag)
  i674.multiplyDragByParticleSize = !!i675[8]
  i674.multiplyDragByParticleVelocity = !!i675[9]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i677 = data
  i676.enabled = !!i677[0]
  request.r(i677[1], i677[2], 0, i676, 'sharedMaterial')
  var i679 = i677[3]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sharedMaterials = i678
  i676.receiveShadows = !!i677[4]
  i676.shadowCastingMode = i677[5]
  i676.sortingLayerID = i677[6]
  i676.sortingOrder = i677[7]
  i676.lightmapIndex = i677[8]
  i676.lightmapSceneIndex = i677[9]
  i676.lightmapScaleOffset = new pc.Vec4( i677[10], i677[11], i677[12], i677[13] )
  i676.lightProbeUsage = i677[14]
  i676.reflectionProbeUsage = i677[15]
  request.r(i677[16], i677[17], 0, i676, 'mesh')
  i676.meshCount = i677[18]
  i676.activeVertexStreamsCount = i677[19]
  i676.alignment = i677[20]
  i676.renderMode = i677[21]
  i676.sortMode = i677[22]
  i676.lengthScale = i677[23]
  i676.velocityScale = i677[24]
  i676.cameraVelocityScale = i677[25]
  i676.normalDirection = i677[26]
  i676.sortingFudge = i677[27]
  i676.minParticleSize = i677[28]
  i676.maxParticleSize = i677[29]
  i676.pivot = new pc.Vec3( i677[30], i677[31], i677[32] )
  request.r(i677[33], i677[34], 0, i676, 'trailMaterial')
  return i676
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i680 = root || request.c( 'AutoDestroy' )
  var i681 = data
  i680.timeOut = i681[0]
  i680.typeDestroy = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i683 = data
  i682.textureMode = i683[0]
  i682.alignment = i683[1]
  i682.widthCurve = new pc.AnimationCurve( { keys_flow: i683[2] } )
  i682.colorGradient = i683[3] ? new pc.ColorGradient(i683[3][0], i683[3][1], i683[3][2]) : null
  var i685 = i683[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 3) {
    i684.push( new pc.Vec3( i685[i + 0], i685[i + 1], i685[i + 2] ) );
  }
  i682.positions = i684
  i682.positionCount = i683[5]
  i682.widthMultiplier = i683[6]
  i682.startWidth = i683[7]
  i682.endWidth = i683[8]
  i682.numCornerVertices = i683[9]
  i682.numCapVertices = i683[10]
  i682.useWorldSpace = !!i683[11]
  i682.loop = !!i683[12]
  i682.startColor = new pc.Color(i683[13], i683[14], i683[15], i683[16])
  i682.endColor = new pc.Color(i683[17], i683[18], i683[19], i683[20])
  i682.generateLightingData = !!i683[21]
  i682.enabled = !!i683[22]
  request.r(i683[23], i683[24], 0, i682, 'sharedMaterial')
  var i687 = i683[25]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i682.sharedMaterials = i686
  i682.receiveShadows = !!i683[26]
  i682.shadowCastingMode = i683[27]
  i682.sortingLayerID = i683[28]
  i682.sortingOrder = i683[29]
  i682.lightmapIndex = i683[30]
  i682.lightmapSceneIndex = i683[31]
  i682.lightmapScaleOffset = new pc.Vec4( i683[32], i683[33], i683[34], i683[35] )
  i682.lightProbeUsage = i683[36]
  i682.reflectionProbeUsage = i683[37]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i691 = data
  i690.name = i691[0]
  i690.atlasId = i691[1]
  i690.mipmapCount = i691[2]
  i690.hdr = !!i691[3]
  i690.size = i691[4]
  i690.anisoLevel = i691[5]
  i690.filterMode = i691[6]
  i690.wrapMode = i691[7]
  var i693 = i691[8]
  var i692 = []
  for(var i = 0; i < i693.length; i += 4) {
    i692.push( UnityEngine.Rect.MinMaxRect(i693[i + 0], i693[i + 1], i693[i + 2], i693[i + 3]) );
  }
  i690.rects = i692
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i697 = data
  i696.name = i697[0]
  i696.index = i697[1]
  i696.startup = !!i697[2]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i699 = data
  i698.enabled = !!i699[0]
  i698.aspect = i699[1]
  i698.orthographic = !!i699[2]
  i698.orthographicSize = i699[3]
  i698.backgroundColor = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.nearClipPlane = i699[8]
  i698.farClipPlane = i699[9]
  i698.fieldOfView = i699[10]
  i698.depth = i699[11]
  i698.clearFlags = i699[12]
  i698.cullingMask = i699[13]
  i698.rect = i699[14]
  request.r(i699[15], i699[16], 0, i698, 'targetTexture')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.type = i701[1]
  i700.color = new pc.Color(i701[2], i701[3], i701[4], i701[5])
  i700.cullingMask = i701[6]
  i700.intensity = i701[7]
  i700.range = i701[8]
  i700.spotAngle = i701[9]
  i700.shadows = i701[10]
  i700.shadowNormalBias = i701[11]
  i700.shadowBias = i701[12]
  i700.shadowStrength = i701[13]
  i700.lightmapBakeType = i701[14]
  i700.renderMode = i701[15]
  request.r(i701[16], i701[17], 0, i700, 'cookie')
  i700.cookieSize = i701[18]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'sharedMesh')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'additionalVertexStreams')
  i704.enabled = !!i705[2]
  request.r(i705[3], i705[4], 0, i704, 'sharedMaterial')
  var i707 = i705[5]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.sharedMaterials = i706
  i704.receiveShadows = !!i705[6]
  i704.shadowCastingMode = i705[7]
  i704.sortingLayerID = i705[8]
  i704.sortingOrder = i705[9]
  i704.lightmapIndex = i705[10]
  i704.lightmapSceneIndex = i705[11]
  i704.lightmapScaleOffset = new pc.Vec4( i705[12], i705[13], i705[14], i705[15] )
  i704.lightProbeUsage = i705[16]
  i704.reflectionProbeUsage = i705[17]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i709 = data
  i708.enabled = !!i709[0]
  i708.isTrigger = !!i709[1]
  request.r(i709[2], i709[3], 0, i708, 'material')
  request.r(i709[4], i709[5], 0, i708, 'sharedMesh')
  i708.convex = !!i709[6]
  return i708
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i710 = root || request.c( 'BunnyBunzoCraft' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'animator')
  i710.yDie = i711[2]
  i710.zDie = i711[3]
  request.r(i711[4], i711[5], 0, i710, 'meshRenderer')
  request.r(i711[6], i711[7], 0, i710, 'shadow')
  request.r(i711[8], i711[9], 0, i710, 'prefBullet')
  i710.hp = i711[10]
  i710.currentHP = i711[11]
  i710.maxDist = i711[12]
  i710.minDist = i711[13]
  return i710
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i712 = root || request.c( 'KillyWillyCraft' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'animator')
  i712.yDie = i713[2]
  i712.zDie = i713[3]
  request.r(i713[4], i713[5], 0, i712, 'meshRenderer')
  request.r(i713[6], i713[7], 0, i712, 'shadow')
  request.r(i713[8], i713[9], 0, i712, 'prefBullet')
  i712.hp = i713[10]
  i712.currentHP = i713[11]
  i712.maxDist = i713[12]
  i712.minDist = i713[13]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i715 = data
  i714.pivot = new pc.Vec2( i715[0], i715[1] )
  i714.anchorMin = new pc.Vec2( i715[2], i715[3] )
  i714.anchorMax = new pc.Vec2( i715[4], i715[5] )
  i714.sizeDelta = new pc.Vec2( i715[6], i715[7] )
  i714.anchoredPosition3D = new pc.Vec3( i715[8], i715[9], i715[10] )
  i714.rotation = new pc.Quat(i715[11], i715[12], i715[13], i715[14])
  i714.scale = new pc.Vec3( i715[15], i715[16], i715[17] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i717 = data
  i716.enabled = !!i717[0]
  i716.planeDistance = i717[1]
  i716.referencePixelsPerUnit = i717[2]
  i716.isFallbackOverlay = !!i717[3]
  i716.renderMode = i717[4]
  i716.renderOrder = i717[5]
  i716.sortingLayerName = i717[6]
  i716.sortingOrder = i717[7]
  i716.scaleFactor = i717[8]
  request.r(i717[9], i717[10], 0, i716, 'worldCamera')
  i716.overrideSorting = !!i717[11]
  i716.pixelPerfect = !!i717[12]
  i716.targetDisplay = i717[13]
  i716.overridePixelPerfect = !!i717[14]
  return i716
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i719 = data
  i718.m_UiScaleMode = i719[0]
  i718.m_ReferencePixelsPerUnit = i719[1]
  i718.m_ScaleFactor = i719[2]
  i718.m_ReferenceResolution = new pc.Vec2( i719[3], i719[4] )
  i718.m_ScreenMatchMode = i719[5]
  i718.m_MatchWidthOrHeight = i719[6]
  i718.m_PhysicalUnit = i719[7]
  i718.m_FallbackScreenDPI = i719[8]
  i718.m_DefaultSpriteDPI = i719[9]
  i718.m_DynamicPixelsPerUnit = i719[10]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i721 = data
  i720.cullTransparentMesh = !!i721[0]
  return i720
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Image' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Sprite')
  i722.m_Type = i723[2]
  i722.m_PreserveAspect = !!i723[3]
  i722.m_FillCenter = !!i723[4]
  i722.m_FillMethod = i723[5]
  i722.m_FillAmount = i723[6]
  i722.m_FillClockwise = !!i723[7]
  i722.m_FillOrigin = i723[8]
  i722.m_UseSpriteMesh = !!i723[9]
  i722.m_PixelsPerUnitMultiplier = i723[10]
  request.r(i723[11], i723[12], 0, i722, 'm_Material')
  i722.m_Maskable = !!i723[13]
  i722.m_Color = new pc.Color(i723[14], i723[15], i723[16], i723[17])
  i722.m_RaycastTarget = !!i723[18]
  return i722
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i725 = data
  i724.m_IgnoreReversedGraphics = !!i725[0]
  i724.m_BlockingObjects = i725[1]
  i724.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i725[2] )
  return i724
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Button' )
  var i727 = data
  i726.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i727[0], i726.m_OnClick)
  i726.m_Navigation = request.d('UnityEngine.UI.Navigation', i727[1], i726.m_Navigation)
  i726.m_Transition = i727[2]
  i726.m_Colors = request.d('UnityEngine.UI.ColorBlock', i727[3], i726.m_Colors)
  i726.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i727[4], i726.m_SpriteState)
  i726.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i727[5], i726.m_AnimationTriggers)
  i726.m_Interactable = !!i727[6]
  request.r(i727[7], i727[8], 0, i726, 'm_TargetGraphic')
  return i726
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i729 = data
  i728.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i729[0], i728.m_PersistentCalls)
  return i728
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('UnityEngine.Events.PersistentCall', i733[i + 0]));
  }
  i730.m_Calls = i732
  return i730
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'm_Target')
  i736.m_MethodName = i737[2]
  i736.m_Mode = i737[3]
  i736.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i737[4], i736.m_Arguments)
  i736.m_CallState = i737[5]
  return i736
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i739 = data
  i738.m_Mode = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'm_SelectOnUp')
  request.r(i739[3], i739[4], 0, i738, 'm_SelectOnDown')
  request.r(i739[5], i739[6], 0, i738, 'm_SelectOnLeft')
  request.r(i739[7], i739[8], 0, i738, 'm_SelectOnRight')
  return i738
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i741 = data
  i740.m_NormalColor = new pc.Color(i741[0], i741[1], i741[2], i741[3])
  i740.m_HighlightedColor = new pc.Color(i741[4], i741[5], i741[6], i741[7])
  i740.m_PressedColor = new pc.Color(i741[8], i741[9], i741[10], i741[11])
  i740.m_SelectedColor = new pc.Color(i741[12], i741[13], i741[14], i741[15])
  i740.m_DisabledColor = new pc.Color(i741[16], i741[17], i741[18], i741[19])
  i740.m_ColorMultiplier = i741[20]
  i740.m_FadeDuration = i741[21]
  return i740
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_HighlightedSprite')
  request.r(i743[2], i743[3], 0, i742, 'm_PressedSprite')
  request.r(i743[4], i743[5], 0, i742, 'm_SelectedSprite')
  request.r(i743[6], i743[7], 0, i742, 'm_DisabledSprite')
  return i742
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i745 = data
  i744.m_NormalTrigger = i745[0]
  i744.m_HighlightedTrigger = i745[1]
  i744.m_PressedTrigger = i745[2]
  i744.m_SelectedTrigger = i745[3]
  i744.m_DisabledTrigger = i745[4]
  return i744
}

Deserializers["DrawLineTutorial"] = function (request, data, root) {
  var i746 = root || request.c( 'DrawLineTutorial' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i749.length; i += 3) {
    i748.add(new pc.Vec3( i749[i + 0], i749[i + 1], i749[i + 2] ));
  }
  i746.lstLinePoints = i748
  request.r(i747[1], i747[2], 0, i746, 'currentLine')
  i746.lineColor = new pc.Color(i747[3], i747[4], i747[5], i747[6])
  i746.lineWidth = i747[7]
  request.r(i747[8], i747[9], 0, i746, 'drawPoint')
  request.r(i747[10], i747[11], 0, i746, 'drawManager')
  i746.timeDelay = i747[12]
  request.r(i747[13], i747[14], 0, i746, 'linePref')
  return i746
}

Deserializers["SoundController"] = function (request, data, root) {
  var i752 = root || request.c( 'SoundController' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'audioSourceFX')
  request.r(i753[2], i753[3], 0, i752, 'audioSourceBG')
  request.r(i753[4], i753[5], 0, i752, 'clipChoose')
  request.r(i753[6], i753[7], 0, i752, 'clipMerge')
  request.r(i753[8], i753[9], 0, i752, 'clipLose')
  request.r(i753[10], i753[11], 0, i752, 'clipWin')
  request.r(i753[12], i753[13], 0, i752, 'clipPunch')
  request.r(i753[14], i753[15], 0, i752, 'clipLightning')
  request.r(i753[16], i753[17], 0, i752, 'clipFall')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'clip')
  request.r(i755[2], i755[3], 0, i754, 'outputAudioMixerGroup')
  i754.playOnAwake = !!i755[4]
  i754.loop = !!i755[5]
  i754.time = i755[6]
  i754.volume = i755[7]
  i754.pitch = i755[8]
  i754.enabled = !!i755[9]
  return i754
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i756 = root || request.c( 'MergeHuggyCraft1' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'drawLine')
  i756.isCanDraw = !!i757[2]
  i756.isEndGame = !!i757[3]
  request.r(i757[4], i757[5], 0, i756, 'cameraMain')
  request.r(i757[6], i757[7], 0, i756, 'soundController')
  request.r(i757[8], i757[9], 0, i756, 'characterParent')
  request.r(i757[10], i757[11], 0, i756, 'enemyParent')
  var i759 = i757[12]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 1, i758, '')
  }
  i756.lstCharacter = i758
  var i761 = i757[13]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 1, i760, '')
  }
  i756.lstEnemy = i760
  i756.isMergeWin = !!i757[14]
  i756.totalPlayer = i757[15]
  request.r(i757[16], i757[17], 0, i756, 'enemyMerge')
  request.r(i757[18], i757[19], 0, i756, 'characterParent2')
  request.r(i757[20], i757[21], 0, i756, 'enemyParent2')
  request.r(i757[22], i757[23], 0, i756, 'map1')
  request.r(i757[24], i757[25], 0, i756, 'map2')
  request.r(i757[26], i757[27], 0, i756, 'bridge1')
  request.r(i757[28], i757[29], 0, i756, 'bridge2')
  request.r(i757[30], i757[31], 0, i756, 'canvasBackground1')
  request.r(i757[32], i757[33], 0, i756, 'canvasBackground2')
  i756.countEnd = i757[34]
  request.r(i757[35], i757[36], 0, i756, 'victory')
  request.r(i757[37], i757[38], 0, i756, 'lose')
  request.r(i757[39], i757[40], 0, i756, 'guide')
  request.r(i757[41], i757[42], 0, i756, 'guideHand')
  request.r(i757[43], i757[44], 0, i756, 'guideAttack')
  request.r(i757[45], i757[46], 0, i756, 'gameEndUI')
  request.r(i757[47], i757[48], 0, i756, 'fightBtn')
  request.r(i757[49], i757[50], 0, i756, 'guideDraw')
  return i756
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i766 = root || request.c( 'DrawLine' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i769.length; i += 3) {
    i768.add(new pc.Vec3( i769[i + 0], i769[i + 1], i769[i + 2] ));
  }
  i766.lstLinePoints = i768
  request.r(i767[1], i767[2], 0, i766, 'currentLine')
  i766.lineColor = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.lineWidth = i767[7]
  i766.timeDelay = i767[8]
  request.r(i767[9], i767[10], 0, i766, 'linePref')
  return i766
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i770 = root || request.c( 'ShootingRaycast' )
  var i771 = data
  return i770
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_FirstSelected')
  i772.m_sendNavigationEvents = !!i773[2]
  i772.m_DragThreshold = i773[3]
  return i772
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i775 = data
  i774.m_HorizontalAxis = i775[0]
  i774.m_VerticalAxis = i775[1]
  i774.m_SubmitButton = i775[2]
  i774.m_CancelButton = i775[3]
  i774.m_InputActionsPerSecond = i775[4]
  i774.m_RepeatDelay = i775[5]
  i774.m_ForceModuleActive = !!i775[6]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i777 = data
  i776.ambientIntensity = i777[0]
  i776.reflectionIntensity = i777[1]
  i776.ambientMode = i777[2]
  i776.ambientLight = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.ambientSkyColor = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  i776.ambientGroundColor = new pc.Color(i777[11], i777[12], i777[13], i777[14])
  i776.ambientEquatorColor = new pc.Color(i777[15], i777[16], i777[17], i777[18])
  i776.fogColor = new pc.Color(i777[19], i777[20], i777[21], i777[22])
  i776.fogEndDistance = i777[23]
  i776.fogStartDistance = i777[24]
  i776.fogDensity = i777[25]
  i776.fog = !!i777[26]
  request.r(i777[27], i777[28], 0, i776, 'skybox')
  i776.fogMode = i777[29]
  var i779 = i777[30]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i779[i + 0]) );
  }
  i776.lightmaps = i778
  i776.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i777[31], i776.lightProbes)
  i776.lightmapsMode = i777[32]
  i776.environmentLightingMode = i777[33]
  i776.ambientProbe = new pc.SphericalHarmonicsL2(i777[34])
  request.r(i777[35], i777[36], 0, i776, 'customReflection')
  request.r(i777[37], i777[38], 0, i776, 'defaultReflection')
  i776.defaultReflectionMode = i777[39]
  i776.defaultReflectionResolution = i777[40]
  i776.sunLightObjectId = i777[41]
  i776.pixelLightCount = i777[42]
  i776.defaultReflectionHDR = !!i777[43]
  i776.hasLightDataAsset = !!i777[44]
  i776.hasManualGenerate = !!i777[45]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'lightmapColor')
  request.r(i783[2], i783[3], 0, i782, 'lightmapDirection')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i784 = root || new UnityEngine.LightProbes()
  var i785 = data
  return i784
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i791 = data
  i790.useSafeMode = !!i791[0]
  i790.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i791[1], i790.safeModeOptions)
  i790.timeScale = i791[2]
  i790.useSmoothDeltaTime = !!i791[3]
  i790.maxSmoothUnscaledTime = i791[4]
  i790.rewindCallbackMode = i791[5]
  i790.showUnityEditorReport = !!i791[6]
  i790.logBehaviour = i791[7]
  i790.drawGizmos = !!i791[8]
  i790.defaultRecyclable = !!i791[9]
  i790.defaultAutoPlay = i791[10]
  i790.defaultUpdateType = i791[11]
  i790.defaultTimeScaleIndependent = !!i791[12]
  i790.defaultEaseType = i791[13]
  i790.defaultEaseOvershootOrAmplitude = i791[14]
  i790.defaultEasePeriod = i791[15]
  i790.defaultAutoKill = !!i791[16]
  i790.defaultLoopType = i791[17]
  i790.debugMode = !!i791[18]
  i790.debugStoreTargetId = !!i791[19]
  i790.showPreviewPanel = !!i791[20]
  i790.storeSettingsLocation = i791[21]
  i790.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i791[22], i790.modules)
  i790.createASMDEF = !!i791[23]
  i790.showPlayingTweens = !!i791[24]
  i790.showPausedTweens = !!i791[25]
  return i790
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i792 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i793 = data
  i792.logBehaviour = i793[0]
  i792.nestedTweenFailureBehaviour = i793[1]
  return i792
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i795 = data
  i794.showPanel = !!i795[0]
  i794.audioEnabled = !!i795[1]
  i794.physicsEnabled = !!i795[2]
  i794.physics2DEnabled = !!i795[3]
  i794.spriteEnabled = !!i795[4]
  i794.uiEnabled = !!i795[5]
  i794.textMeshProEnabled = !!i795[6]
  i794.tk2DEnabled = !!i795[7]
  i794.deAudioEnabled = !!i795[8]
  i794.deUnityExtendedEnabled = !!i795[9]
  i794.epoOutlineEnabled = !!i795[10]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(i799[i + 0]);
  }
  i796.invalidShaderVariants = i798
  i796.name = i797[1]
  i796.guid = i797[2]
  var i801 = i797[3]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i796.shaderDefinedKeywords = i800
  var i803 = i797[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i803[i + 0]) );
  }
  i796.passes = i802
  var i805 = i797[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i805[i + 0]) );
  }
  i796.usePasses = i804
  var i807 = i797[6]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i807[i + 0]) );
  }
  i796.defaultParameterValues = i806
  request.r(i797[7], i797[8], 0, i796, 'unityFallbackShader')
  i796.readDepth = !!i797[9]
  i796.isCreatedByShaderGraph = !!i797[10]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i814 = root || new pc.UnityShaderPass()
  var i815 = data
  i814.id = i815[0]
  i814.subShaderIndex = i815[1]
  i814.name = i815[2]
  i814.passType = i815[3]
  i814.usePass = !!i815[4]
  i814.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[5], i814.zTest)
  i814.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[6], i814.zWrite)
  i814.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[7], i814.culling)
  i814.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i815[8], i814.blending)
  i814.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i815[9], i814.alphaBlending)
  i814.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[10], i814.colorWriteMask)
  i814.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[11], i814.offsetUnits)
  i814.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[12], i814.offsetFactor)
  i814.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[13], i814.stencilRef)
  i814.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[14], i814.stencilReadMask)
  i814.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[15], i814.stencilWriteMask)
  i814.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[16], i814.stencilOp)
  i814.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[17], i814.stencilOpFront)
  i814.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[18], i814.stencilOpBack)
  var i817 = i815[19]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i817[i + 0]) );
  }
  i814.tags = i816
  var i819 = i815[20]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.passDefinedKeywords = i818
  var i821 = i815[21]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i821[i + 0]) );
  }
  i814.variants = i820
  var i823 = i815[22]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i823[i + 0]) );
  }
  i814.excludedVariants = i822
  i814.hasDepthReader = !!i815[23]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i825 = data
  i824.val = i825[0]
  i824.name = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i827 = data
  i826.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[0], i826.src)
  i826.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[1], i826.dst)
  i826.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[2], i826.op)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i829 = data
  i828.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[0], i828.pass)
  i828.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[1], i828.fail)
  i828.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[2], i828.zFail)
  i828.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[3], i828.comp)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i837 = data
  i836.passId = i837[0]
  i836.subShaderIndex = i837[1]
  var i839 = i837[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i836.keywords = i838
  i836.vertexProgram = i837[3]
  i836.fragmentProgram = i837[4]
  i836.readDepth = !!i837[5]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'shader')
  i842.pass = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i847 = data
  i846.name = i847[0]
  i846.type = i847[1]
  i846.value = new pc.Vec4( i847[2], i847[3], i847[4], i847[5] )
  i846.textureValue = i847[6]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i849 = data
  i848.name = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'texture')
  i848.aabb = i849[3]
  i848.vertices = i849[4]
  i848.triangles = i849[5]
  i848.textureRect = UnityEngine.Rect.MinMaxRect(i849[6], i849[7], i849[8], i849[9])
  i848.packedRect = UnityEngine.Rect.MinMaxRect(i849[10], i849[11], i849[12], i849[13])
  i848.border = new pc.Vec4( i849[14], i849[15], i849[16], i849[17] )
  i848.transparency = i849[18]
  i848.bounds = i849[19]
  i848.pixelsPerUnit = i849[20]
  i848.textureWidth = i849[21]
  i848.textureHeight = i849[22]
  i848.nativeSize = new pc.Vec2( i849[23], i849[24] )
  i848.pivot = new pc.Vec2( i849[25], i849[26] )
  i848.textureRectOffset = new pc.Vec2( i849[27], i849[28] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i851 = data
  i850.name = i851[0]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i853 = data
  i852.name = i853[0]
  i852.wrapMode = i853[1]
  i852.isLooping = !!i853[2]
  i852.length = i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i855[i + 0]) );
  }
  i852.curves = i854
  var i857 = i853[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i857[i + 0]) );
  }
  i852.events = i856
  i852.halfPrecision = !!i853[6]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i861 = data
  i860.path = i861[0]
  i860.componentType = i861[1]
  i860.property = i861[2]
  i860.keys = i861[3]
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i863[i + 0]) );
  }
  i860.objectReferenceKeys = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i867 = data
  i866.time = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'value')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i871 = data
  i870.functionName = i871[0]
  i870.floatParameter = i871[1]
  i870.intParameter = i871[2]
  i870.stringParameter = i871[3]
  request.r(i871[4], i871[5], 0, i870, 'objectReferenceParameter')
  i870.time = i871[6]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i873 = data
  i872.name = i873[0]
  var i875 = i873[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i875[i + 0]) );
  }
  i872.states = i874
  var i877 = i873[2]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i877[i + 0]) );
  }
  i872.layers = i876
  var i879 = i873[3]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i879[i + 0]) );
  }
  i872.parameters = i878
  var i881 = i873[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i872.animationClips = i880
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i885 = data
  i884.cycleOffset = i885[0]
  i884.cycleOffsetParameter = i885[1]
  i884.cycleOffsetParameterActive = !!i885[2]
  i884.mirror = !!i885[3]
  i884.mirrorParameter = i885[4]
  i884.mirrorParameterActive = !!i885[5]
  i884.motionId = i885[6]
  i884.nameHash = i885[7]
  i884.fullPathHash = i885[8]
  i884.speed = i885[9]
  i884.speedParameter = i885[10]
  i884.speedParameterActive = !!i885[11]
  i884.tag = i885[12]
  i884.name = i885[13]
  i884.writeDefaultValues = !!i885[14]
  var i887 = i885[15]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i887[i + 0]) );
  }
  i884.transitions = i886
  var i889 = i885[16]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i884.behaviours = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i893 = data
  i892.fullPath = i893[0]
  i892.canTransitionToSelf = !!i893[1]
  i892.duration = i893[2]
  i892.exitTime = i893[3]
  i892.hasExitTime = !!i893[4]
  i892.hasFixedDuration = !!i893[5]
  i892.interruptionSource = i893[6]
  i892.offset = i893[7]
  i892.orderedInterruption = !!i893[8]
  i892.destinationStateNameHash = i893[9]
  i892.destinationStateMachineId = i893[10]
  i892.isExit = !!i893[11]
  i892.mute = !!i893[12]
  i892.solo = !!i893[13]
  var i895 = i893[14]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i895[i + 0]) );
  }
  i892.conditions = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i899 = data
  i898.mode = i899[0]
  i898.parameter = i899[1]
  i898.threshold = i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i905 = data
  i904.blendingMode = i905[0]
  i904.defaultWeight = i905[1]
  i904.name = i905[2]
  i904.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i905[3], i904.stateMachine)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i907 = data
  i906.id = i907[0]
  i906.defaultStateNameHash = i907[1]
  var i909 = i907[2]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i909[i + 0]) );
  }
  i906.entryTransitions = i908
  var i911 = i907[3]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i911[i + 0]) );
  }
  i906.anyStateTransitions = i910
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i915 = data
  i914.destinationStateNameHash = i915[0]
  i914.destinationStateMachineId = i915[1]
  i914.isExit = !!i915[2]
  i914.mute = !!i915[3]
  i914.solo = !!i915[4]
  var i917 = i915[5]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i917[i + 0]) );
  }
  i914.conditions = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i921 = data
  i920.defaultBool = !!i921[0]
  i920.defaultFloat = i921[1]
  i920.defaultInt = i921[2]
  i920.name = i921[3]
  i920.nameHash = i921[4]
  i920.type = i921[5]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i923 = data
  i922.name = i923[0]
  i922.bytes64 = i923[1]
  i922.data = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i927[i + 0]) );
  }
  i924.files = i926
  i924.componentToPrefabIds = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i931 = data
  i930.path = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'unityObject')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i933 = data
  var i935 = i933[0]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i935[i + 0]) );
  }
  i932.scriptsExecutionOrder = i934
  var i937 = i933[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i937[i + 0]) );
  }
  i932.sortingLayers = i936
  var i939 = i933[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i939[i + 0]) );
  }
  i932.cullingLayers = i938
  i932.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i933[3], i932.timeSettings)
  i932.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i933[4], i932.physicsSettings)
  i932.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i933[5], i932.physics2DSettings)
  i932.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i933[6], i932.qualitySettings)
  i932.removeShadows = !!i933[7]
  i932.autoInstantiatePrefabs = !!i933[8]
  i932.enableAutoInstancing = !!i933[9]
  i932.lightmapEncodingQuality = i933[10]
  i932.desiredColorSpace = i933[11]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i943 = data
  i942.name = i943[0]
  i942.value = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  i946.value = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i951 = data
  i950.id = i951[0]
  i950.name = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i953 = data
  i952.fixedDeltaTime = i953[0]
  i952.maximumDeltaTime = i953[1]
  i952.timeScale = i953[2]
  i952.maximumParticleTimestep = i953[3]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i955 = data
  i954.gravity = new pc.Vec3( i955[0], i955[1], i955[2] )
  i954.defaultSolverIterations = i955[3]
  i954.bounceThreshold = i955[4]
  i954.autoSyncTransforms = !!i955[5]
  i954.autoSimulation = !!i955[6]
  var i957 = i955[7]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i957[i + 0]) );
  }
  i954.collisionMatrix = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i961 = data
  i960.enabled = !!i961[0]
  i960.layerId = i961[1]
  i960.otherLayerId = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'material')
  i962.gravity = new pc.Vec2( i963[2], i963[3] )
  i962.positionIterations = i963[4]
  i962.velocityIterations = i963[5]
  i962.velocityThreshold = i963[6]
  i962.maxLinearCorrection = i963[7]
  i962.maxAngularCorrection = i963[8]
  i962.maxTranslationSpeed = i963[9]
  i962.maxRotationSpeed = i963[10]
  i962.timeToSleep = i963[11]
  i962.linearSleepTolerance = i963[12]
  i962.angularSleepTolerance = i963[13]
  i962.defaultContactOffset = i963[14]
  i962.autoSimulation = !!i963[15]
  i962.queriesHitTriggers = !!i963[16]
  i962.queriesStartInColliders = !!i963[17]
  i962.callbacksOnDisable = !!i963[18]
  i962.reuseCollisionCallbacks = !!i963[19]
  i962.autoSyncTransforms = !!i963[20]
  var i965 = i963[21]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i965[i + 0]) );
  }
  i962.collisionMatrix = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.layerId = i969[1]
  i968.otherLayerId = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i973[i + 0]) );
  }
  i970.qualityLevels = i972
  var i975 = i971[1]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.names = i974
  i970.shadows = i971[2]
  i970.anisotropicFiltering = i971[3]
  i970.antiAliasing = i971[4]
  i970.lodBias = i971[5]
  i970.shadowCascades = i971[6]
  i970.shadowDistance = i971[7]
  i970.shadowmaskMode = i971[8]
  i970.shadowProjection = i971[9]
  i970.shadowResolution = i971[10]
  i970.softParticles = !!i971[11]
  i970.softVegetation = !!i971[12]
  i970.activeColorSpace = i971[13]
  i970.desiredColorSpace = i971[14]
  i970.masterTextureLimit = i971[15]
  i970.maxQueuedFrames = i971[16]
  i970.particleRaycastBudget = i971[17]
  i970.pixelLightCount = i971[18]
  i970.realtimeReflectionProbes = !!i971[19]
  i970.shadowCascade2Split = i971[20]
  i970.shadowCascade4Split = new pc.Vec3( i971[21], i971[22], i971[23] )
  i970.streamingMipmapsActive = !!i971[24]
  i970.vSyncCount = i971[25]
  i970.asyncUploadBufferSize = i971[26]
  i970.asyncUploadTimeSlice = i971[27]
  i970.billboardsFaceCameraPosition = !!i971[28]
  i970.shadowNearPlaneOffset = i971[29]
  i970.streamingMipmapsMemoryBudget = i971[30]
  i970.maximumLODLevel = i971[31]
  i970.streamingMipmapsAddAllCameras = !!i971[32]
  i970.streamingMipmapsMaxLevelReduction = i971[33]
  i970.streamingMipmapsRenderersPerFrame = i971[34]
  i970.resolutionScalingFixedDPIFactor = i971[35]
  i970.streamingMipmapsMaxFileIORequests = i971[36]
  i970.currentQualityLevel = i971[37]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i981 = data
  i980.weight = i981[0]
  i980.vertices = i981[1]
  i980.normals = i981[2]
  i980.tangents = i981[3]
  return i980
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_ObjectArgument')
  i982.m_ObjectArgumentAssemblyTypeName = i983[2]
  i982.m_IntArgument = i983[3]
  i982.m_FloatArgument = i983[4]
  i982.m_StringArgument = i983[5]
  i982.m_BoolArgument = !!i983[6]
  return i982
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

Deserializers.buildID = "d21a91af-a224-423f-85e1-f211c20d91be";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

