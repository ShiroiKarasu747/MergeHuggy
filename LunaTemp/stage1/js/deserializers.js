var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSpring' )
  var i489 = data
  i488.spring = i489[0]
  i488.damper = i489[1]
  i488.targetPosition = i489[2]
  return i488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor' )
  var i491 = data
  i490.m_TargetVelocity = i491[0]
  i490.m_Force = i491[1]
  i490.m_FreeSpin = i491[2]
  return i490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointLimits' )
  var i493 = data
  i492.m_Min = i493[0]
  i492.m_Max = i493[1]
  i492.m_Bounciness = i493[2]
  i492.m_BounceMinVelocity = i493[3]
  i492.m_ContactDistance = i493[4]
  i492.minBounce = i493[5]
  i492.maxBounce = i493[6]
  return i492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointDrive' )
  var i495 = data
  i494.m_PositionSpring = i495[0]
  i494.m_PositionDamper = i495[1]
  i494.m_MaximumForce = i495[2]
  return i494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i497 = data
  i496.m_Spring = i497[0]
  i496.m_Damper = i497[1]
  return i496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i499 = data
  i498.m_Limit = i499[0]
  i498.m_Bounciness = i499[1]
  i498.m_ContactDistance = i499[2]
  return i498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i501 = data
  i500.m_ExtremumSlip = i501[0]
  i500.m_ExtremumValue = i501[1]
  i500.m_AsymptoteSlip = i501[2]
  i500.m_AsymptoteValue = i501[3]
  i500.m_Stiffness = i501[4]
  return i500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i503 = data
  i502.m_LowerAngle = i503[0]
  i502.m_UpperAngle = i503[1]
  return i502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i505 = data
  i504.m_MotorSpeed = i505[0]
  i504.m_MaximumMotorTorque = i505[1]
  return i504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i507 = data
  i506.m_DampingRatio = i507[0]
  i506.m_Frequency = i507[1]
  i506.m_Angle = i507[2]
  return i506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i509 = data
  i508.m_LowerTranslation = i509[0]
  i508.m_UpperTranslation = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i510 = root || new pc.UnityMaterial()
  var i511 = data
  i510.name = i511[0]
  request.r(i511[1], i511[2], 0, i510, 'shader')
  i510.renderQueue = i511[3]
  i510.enableInstancing = !!i511[4]
  var i513 = i511[5]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i513[i + 0]) );
  }
  i510.floatParameters = i512
  var i515 = i511[6]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i515[i + 0]) );
  }
  i510.colorParameters = i514
  var i517 = i511[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i517[i + 0]) );
  }
  i510.vectorParameters = i516
  var i519 = i511[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i519[i + 0]) );
  }
  i510.textureParameters = i518
  var i521 = i511[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i521[i + 0]) );
  }
  i510.materialFlags = i520
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Color(i529[1], i529[2], i529[3], i529[4])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = new pc.Vec4( i533[1], i533[2], i533[3], i533[4] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'value')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i541 = data
  i540.name = i541[0]
  i540.enabled = !!i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i543 = data
  i542.name = i543[0]
  i542.halfPrecision = !!i543[1]
  i542.vertexCount = i543[2]
  i542.aabb = i543[3]
  var i545 = i543[4]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( !!i545[i + 0] );
  }
  i542.streams = i544
  i542.vertices = i543[5]
  var i547 = i543[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i547[i + 0]) );
  }
  i542.subMeshes = i546
  var i549 = i543[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 16) {
    i548.push( new pc.Mat4().setData(i549[i + 0], i549[i + 1], i549[i + 2], i549[i + 3],  i549[i + 4], i549[i + 5], i549[i + 6], i549[i + 7],  i549[i + 8], i549[i + 9], i549[i + 10], i549[i + 11],  i549[i + 12], i549[i + 13], i549[i + 14], i549[i + 15]) );
  }
  i542.bindposes = i548
  var i551 = i543[8]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i551[i + 0]) );
  }
  i542.blendShapes = i550
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i557 = data
  i556.triangles = i557[0]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i563 = data
  i562.name = i563[0]
  var i565 = i563[1]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i565[i + 0]) );
  }
  i562.frames = i564
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i567 = data
  i566.name = i567[0]
  i566.width = i567[1]
  i566.height = i567[2]
  i566.mipmapCount = i567[3]
  i566.anisoLevel = i567[4]
  i566.filterMode = i567[5]
  i566.hdr = !!i567[6]
  i566.format = i567[7]
  i566.wrapMode = i567[8]
  i566.alphaIsTransparency = !!i567[9]
  i566.alphaSource = i567[10]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i569 = data
  i568.position = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.scale = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.rotation = new pc.Quat(i569[6], i569[7], i569[8], i569[9])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'animatorController')
  i570.updateMode = i571[2]
  var i573 = i571[3]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.humanBones = i572
  i570.enabled = !!i571[4]
  return i570
}

Deserializers["CharacterController"] = function (request, data, root) {
  var i576 = root || request.c( 'CharacterController' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'border')
  request.r(i577[2], i577[3], 0, i576, 'circle')
  request.r(i577[4], i577[5], 0, i576, 'characterUp')
  request.r(i577[6], i577[7], 0, i576, 'fxSmoke')
  i576.charScale = new pc.Vec3( i577[8], i577[9], i577[10] )
  i576.index = i577[11]
  request.r(i577[12], i577[13], 0, i576, 'txtBorderIndex')
  request.r(i577[14], i577[15], 0, i576, 'txtIndex')
  i576.isChoosed = !!i577[16]
  request.r(i577[17], i577[18], 0, i576, 'meshRenderer')
  i576.isTargetEnemy = !!i577[19]
  request.r(i577[20], i577[21], 0, i576, 'animator')
  request.r(i577[22], i577[23], 0, i576, 'canvas')
  i576.yDie = i577[24]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i579 = data
  i578.center = new pc.Vec3( i579[0], i579[1], i579[2] )
  i578.size = new pc.Vec3( i579[3], i579[4], i579[5] )
  i578.enabled = !!i579[6]
  i578.isTrigger = !!i579[7]
  request.r(i579[8], i579[9], 0, i578, 'material')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i581 = data
  i580.mass = i581[0]
  i580.drag = i581[1]
  i580.angularDrag = i581[2]
  i580.useGravity = !!i581[3]
  i580.isKinematic = !!i581[4]
  i580.constraints = i581[5]
  i580.maxAngularVelocity = i581[6]
  i580.collisionDetectionMode = i581[7]
  i580.interpolation = i581[8]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i583 = data
  i582.name = i583[0]
  i582.tag = i583[1]
  i582.enabled = !!i583[2]
  i582.isStatic = !!i583[3]
  i582.layer = i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i585 = data
  i584.enabled = !!i585[0]
  request.r(i585[1], i585[2], 0, i584, 'sharedMaterial')
  var i587 = i585[3]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sharedMaterials = i586
  i584.receiveShadows = !!i585[4]
  i584.shadowCastingMode = i585[5]
  i584.sortingLayerID = i585[6]
  i584.sortingOrder = i585[7]
  i584.lightmapIndex = i585[8]
  i584.lightmapSceneIndex = i585[9]
  i584.lightmapScaleOffset = new pc.Vec4( i585[10], i585[11], i585[12], i585[13] )
  i584.lightProbeUsage = i585[14]
  i584.reflectionProbeUsage = i585[15]
  request.r(i585[16], i585[17], 0, i584, 'sharedMesh')
  var i589 = i585[18]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i584.bones = i588
  i584.updateWhenOffscreen = !!i585[19]
  i584.localBounds = i585[20]
  request.r(i585[21], i585[22], 0, i584, 'rootBone')
  var i591 = i585[23]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i591[i + 0]) );
  }
  i584.blendShapesWeights = i590
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i597 = data
  i596.weight = i597[0]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i599 = data
  i598.enabled = !!i599[0]
  request.r(i599[1], i599[2], 0, i598, 'sharedMaterial')
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[4]
  i598.shadowCastingMode = i599[5]
  i598.sortingLayerID = i599[6]
  i598.sortingOrder = i599[7]
  i598.lightmapIndex = i599[8]
  i598.lightmapSceneIndex = i599[9]
  i598.lightmapScaleOffset = new pc.Vec4( i599[10], i599[11], i599[12], i599[13] )
  i598.lightProbeUsage = i599[14]
  i598.reflectionProbeUsage = i599[15]
  i598.color = new pc.Color(i599[16], i599[17], i599[18], i599[19])
  request.r(i599[20], i599[21], 0, i598, 'sprite')
  i598.flipX = !!i599[22]
  i598.flipY = !!i599[23]
  i598.drawMode = i599[24]
  i598.size = new pc.Vec2( i599[25], i599[26] )
  i598.tileMode = i599[27]
  i598.adaptiveModeThreshold = i599[28]
  i598.maskInteraction = i599[29]
  i598.spriteSortPoint = i599[30]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i603 = data
  i602.playAutomatically = !!i603[0]
  request.r(i603[1], i603[2], 0, i602, 'clip')
  var i605 = i603[3]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602.clips = i604
  i602.wrapMode = i603[4]
  i602.enabled = !!i603[5]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i609 = data
  i608.pivot = new pc.Vec2( i609[0], i609[1] )
  i608.anchorMin = new pc.Vec2( i609[2], i609[3] )
  i608.anchorMax = new pc.Vec2( i609[4], i609[5] )
  i608.sizeDelta = new pc.Vec2( i609[6], i609[7] )
  i608.anchoredPosition3D = new pc.Vec3( i609[8], i609[9], i609[10] )
  i608.rotation = new pc.Quat(i609[11], i609[12], i609[13], i609[14])
  i608.scale = new pc.Vec3( i609[15], i609[16], i609[17] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i611 = data
  i610.enabled = !!i611[0]
  i610.planeDistance = i611[1]
  i610.referencePixelsPerUnit = i611[2]
  i610.isFallbackOverlay = !!i611[3]
  i610.renderMode = i611[4]
  i610.renderOrder = i611[5]
  i610.sortingLayerName = i611[6]
  i610.sortingOrder = i611[7]
  i610.scaleFactor = i611[8]
  request.r(i611[9], i611[10], 0, i610, 'worldCamera')
  i610.overrideSorting = !!i611[11]
  i610.pixelPerfect = !!i611[12]
  i610.targetDisplay = i611[13]
  i610.overridePixelPerfect = !!i611[14]
  return i610
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i613 = data
  i612.m_UiScaleMode = i613[0]
  i612.m_ReferencePixelsPerUnit = i613[1]
  i612.m_ScaleFactor = i613[2]
  i612.m_ReferenceResolution = new pc.Vec2( i613[3], i613[4] )
  i612.m_ScreenMatchMode = i613[5]
  i612.m_MatchWidthOrHeight = i613[6]
  i612.m_PhysicalUnit = i613[7]
  i612.m_FallbackScreenDPI = i613[8]
  i612.m_DefaultSpriteDPI = i613[9]
  i612.m_DynamicPixelsPerUnit = i613[10]
  return i612
}

Deserializers["LookAtCamera"] = function (request, data, root) {
  var i614 = root || request.c( 'LookAtCamera' )
  var i615 = data
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i617 = data
  i616.cullTransparentMesh = !!i617[0]
  return i616
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Text' )
  var i619 = data
  i618.m_FontData = request.d('UnityEngine.UI.FontData', i619[0], i618.m_FontData)
  i618.m_Text = i619[1]
  request.r(i619[2], i619[3], 0, i618, 'm_Material')
  i618.m_Maskable = !!i619[4]
  i618.m_Color = new pc.Color(i619[5], i619[6], i619[7], i619[8])
  i618.m_RaycastTarget = !!i619[9]
  return i618
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.FontData' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Font')
  i620.m_FontSize = i621[2]
  i620.m_FontStyle = i621[3]
  i620.m_BestFit = !!i621[4]
  i620.m_MinSize = i621[5]
  i620.m_MaxSize = i621[6]
  i620.m_Alignment = i621[7]
  i620.m_AlignByGeometry = !!i621[8]
  i620.m_RichText = !!i621[9]
  i620.m_HorizontalOverflow = i621[10]
  i620.m_VerticalOverflow = i621[11]
  i620.m_LineSpacing = i621[12]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i623 = data
  i622.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i623[0], i622.main)
  i622.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i623[1], i622.colorBySpeed)
  i622.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i623[2], i622.colorOverLifetime)
  i622.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i623[3], i622.emission)
  i622.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i623[4], i622.rotationBySpeed)
  i622.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i623[5], i622.rotationOverLifetime)
  i622.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i623[6], i622.shape)
  i622.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i623[7], i622.sizeBySpeed)
  i622.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i623[8], i622.sizeOverLifetime)
  i622.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i623[9], i622.textureSheetAnimation)
  i622.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i623[10], i622.velocityOverLifetime)
  i622.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i623[11], i622.noise)
  i622.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i623[12], i622.inheritVelocity)
  i622.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i623[13], i622.forceOverLifetime)
  i622.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i623[14], i622.limitVelocityOverLifetime)
  i622.useAutoRandomSeed = !!i623[15]
  i622.randomSeed = i623[16]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemMain()
  var i625 = data
  i624.duration = i625[0]
  i624.loop = !!i625[1]
  i624.prewarm = !!i625[2]
  i624.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.startDelay)
  i624.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[4], i624.startLifetime)
  i624.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[5], i624.startSpeed)
  i624.startSize3D = !!i625[6]
  i624.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[7], i624.startSizeX)
  i624.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[8], i624.startSizeY)
  i624.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[9], i624.startSizeZ)
  i624.startRotation3D = !!i625[10]
  i624.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[11], i624.startRotationX)
  i624.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[12], i624.startRotationY)
  i624.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[13], i624.startRotationZ)
  i624.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[14], i624.startColor)
  i624.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[15], i624.gravityModifier)
  i624.simulationSpace = i625[16]
  request.r(i625[17], i625[18], 0, i624, 'customSimulationSpace')
  i624.simulationSpeed = i625[19]
  i624.useUnscaledTime = !!i625[20]
  i624.scalingMode = i625[21]
  i624.playOnAwake = !!i625[22]
  i624.maxParticles = i625[23]
  i624.emitterVelocityMode = i625[24]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i626 = root || new pc.MinMaxCurve()
  var i627 = data
  i626.mode = i627[0]
  i626.curveMin = new pc.AnimationCurve( { keys_flow: i627[1] } )
  i626.curveMax = new pc.AnimationCurve( { keys_flow: i627[2] } )
  i626.curveMultiplier = i627[3]
  i626.constantMin = i627[4]
  i626.constantMax = i627[5]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i628 = root || new pc.MinMaxGradient()
  var i629 = data
  i628.mode = i629[0]
  i628.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[1], i628.gradientMin)
  i628.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[2], i628.gradientMax)
  i628.colorMin = new pc.Color(i629[3], i629[4], i629[5], i629[6])
  i628.colorMax = new pc.Color(i629[7], i629[8], i629[9], i629[10])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i631 = data
  i630.mode = i631[0]
  var i633 = i631[1]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i633[i + 0]) );
  }
  i630.colorKeys = i632
  var i635 = i631[2]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i635[i + 0]) );
  }
  i630.alphaKeys = i634
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemColorBySpeed()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[1], i636.color)
  i636.range = new pc.Vec2( i637[2], i637[3] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i641 = data
  i640.color = new pc.Color(i641[0], i641[1], i641[2], i641[3])
  i640.time = i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i645 = data
  i644.alpha = i645[0]
  i644.time = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemEmitter()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.rateOverTime)
  i648.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.rateOverDistance)
  var i651 = i649[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i651[i + 0]) );
  }
  i648.bursts = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemBurst()
  var i655 = data
  i654.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[0], i654.count)
  i654.cycleCount = i655[1]
  i654.minCount = i655[2]
  i654.maxCount = i655[3]
  i654.repeatInterval = i655[4]
  i654.time = i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemRotationBySpeed()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.separateAxes = !!i657[4]
  i656.range = new pc.Vec2( i657[5], i657[6] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemRotationOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemShape()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.shapeType = i661[1]
  i660.randomDirectionAmount = i661[2]
  i660.sphericalDirectionAmount = i661[3]
  i660.randomPositionAmount = i661[4]
  i660.alignToDirection = !!i661[5]
  i660.radius = i661[6]
  i660.radiusMode = i661[7]
  i660.radiusSpread = i661[8]
  i660.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.radiusSpeed)
  i660.radiusThickness = i661[10]
  i660.angle = i661[11]
  i660.length = i661[12]
  i660.boxThickness = new pc.Vec3( i661[13], i661[14], i661[15] )
  i660.meshShapeType = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'mesh')
  request.r(i661[19], i661[20], 0, i660, 'meshRenderer')
  request.r(i661[21], i661[22], 0, i660, 'skinnedMeshRenderer')
  i660.useMeshMaterialIndex = !!i661[23]
  i660.meshMaterialIndex = i661[24]
  i660.useMeshColors = !!i661[25]
  i660.normalOffset = i661[26]
  i660.arc = i661[27]
  i660.arcMode = i661[28]
  i660.arcSpread = i661[29]
  i660.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[30], i660.arcSpeed)
  i660.donutRadius = i661[31]
  i660.position = new pc.Vec3( i661[32], i661[33], i661[34] )
  i660.rotation = new pc.Vec3( i661[35], i661[36], i661[37] )
  i660.scale = new pc.Vec3( i661[38], i661[39], i661[40] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemSizeBySpeed()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  i662.range = new pc.Vec2( i663[5], i663[6] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemSizeOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.mode = i667[1]
  i666.animation = i667[2]
  i666.numTilesX = i667[3]
  i666.numTilesY = i667[4]
  i666.useRandomRow = !!i667[5]
  i666.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[6], i666.frameOverTime)
  i666.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[7], i666.startFrame)
  i666.cycleCount = i667[8]
  i666.rowIndex = i667[9]
  i666.flipU = i667[10]
  i666.flipV = i667[11]
  i666.spriteCount = i667[12]
  var i669 = i667[13]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sprites = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[4], i672.speedModifier)
  i672.space = i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemNoise()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.separateAxes = !!i675[1]
  i674.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.strengthX)
  i674.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.strengthY)
  i674.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[4], i674.strengthZ)
  i674.frequency = i675[5]
  i674.damping = !!i675[6]
  i674.octaveCount = i675[7]
  i674.octaveMultiplier = i675[8]
  i674.octaveScale = i675[9]
  i674.quality = i675[10]
  i674.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[11], i674.scrollSpeed)
  i674.scrollSpeedMultiplier = i675[12]
  i674.remapEnabled = !!i675[13]
  i674.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[14], i674.remapX)
  i674.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[15], i674.remapY)
  i674.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[16], i674.remapZ)
  i674.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[17], i674.positionAmount)
  i674.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[18], i674.rotationAmount)
  i674.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[19], i674.sizeAmount)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemInheritVelocity()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.curve)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemForceOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.space = i679[4]
  i678.randomized = !!i679[5]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.limitX)
  i680.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.limitY)
  i680.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.limitZ)
  i680.dampen = i681[4]
  i680.separateAxes = !!i681[5]
  i680.space = i681[6]
  i680.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.drag)
  i680.multiplyDragByParticleSize = !!i681[8]
  i680.multiplyDragByParticleVelocity = !!i681[9]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i683 = data
  i682.enabled = !!i683[0]
  request.r(i683[1], i683[2], 0, i682, 'sharedMaterial')
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sharedMaterials = i684
  i682.receiveShadows = !!i683[4]
  i682.shadowCastingMode = i683[5]
  i682.sortingLayerID = i683[6]
  i682.sortingOrder = i683[7]
  i682.lightmapIndex = i683[8]
  i682.lightmapSceneIndex = i683[9]
  i682.lightmapScaleOffset = new pc.Vec4( i683[10], i683[11], i683[12], i683[13] )
  i682.lightProbeUsage = i683[14]
  i682.reflectionProbeUsage = i683[15]
  request.r(i683[16], i683[17], 0, i682, 'mesh')
  i682.meshCount = i683[18]
  i682.activeVertexStreamsCount = i683[19]
  i682.alignment = i683[20]
  i682.renderMode = i683[21]
  i682.sortMode = i683[22]
  i682.lengthScale = i683[23]
  i682.velocityScale = i683[24]
  i682.cameraVelocityScale = i683[25]
  i682.normalDirection = i683[26]
  i682.sortingFudge = i683[27]
  i682.minParticleSize = i683[28]
  i682.maxParticleSize = i683[29]
  i682.pivot = new pc.Vec3( i683[30], i683[31], i683[32] )
  request.r(i683[33], i683[34], 0, i682, 'trailMaterial')
  return i682
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i686 = root || request.c( 'AutoDestroy' )
  var i687 = data
  i686.timeOut = i687[0]
  i686.typeDestroy = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i689 = data
  i688.textureMode = i689[0]
  i688.alignment = i689[1]
  i688.widthCurve = new pc.AnimationCurve( { keys_flow: i689[2] } )
  i688.colorGradient = i689[3] ? new pc.ColorGradient(i689[3][0], i689[3][1], i689[3][2]) : null
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 3) {
    i690.push( new pc.Vec3( i691[i + 0], i691[i + 1], i691[i + 2] ) );
  }
  i688.positions = i690
  i688.positionCount = i689[5]
  i688.widthMultiplier = i689[6]
  i688.startWidth = i689[7]
  i688.endWidth = i689[8]
  i688.numCornerVertices = i689[9]
  i688.numCapVertices = i689[10]
  i688.useWorldSpace = !!i689[11]
  i688.loop = !!i689[12]
  i688.startColor = new pc.Color(i689[13], i689[14], i689[15], i689[16])
  i688.endColor = new pc.Color(i689[17], i689[18], i689[19], i689[20])
  i688.generateLightingData = !!i689[21]
  i688.enabled = !!i689[22]
  request.r(i689[23], i689[24], 0, i688, 'sharedMaterial')
  var i693 = i689[25]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i688.sharedMaterials = i692
  i688.receiveShadows = !!i689[26]
  i688.shadowCastingMode = i689[27]
  i688.sortingLayerID = i689[28]
  i688.sortingOrder = i689[29]
  i688.lightmapIndex = i689[30]
  i688.lightmapSceneIndex = i689[31]
  i688.lightmapScaleOffset = new pc.Vec4( i689[32], i689[33], i689[34], i689[35] )
  i688.lightProbeUsage = i689[36]
  i688.reflectionProbeUsage = i689[37]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i697 = data
  i696.name = i697[0]
  i696.atlasId = i697[1]
  i696.mipmapCount = i697[2]
  i696.hdr = !!i697[3]
  i696.size = i697[4]
  i696.anisoLevel = i697[5]
  i696.filterMode = i697[6]
  i696.wrapMode = i697[7]
  var i699 = i697[8]
  var i698 = []
  for(var i = 0; i < i699.length; i += 4) {
    i698.push( UnityEngine.Rect.MinMaxRect(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3]) );
  }
  i696.rects = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i703 = data
  i702.name = i703[0]
  i702.index = i703[1]
  i702.startup = !!i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i705 = data
  i704.enabled = !!i705[0]
  i704.aspect = i705[1]
  i704.orthographic = !!i705[2]
  i704.orthographicSize = i705[3]
  i704.backgroundColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.nearClipPlane = i705[8]
  i704.farClipPlane = i705[9]
  i704.fieldOfView = i705[10]
  i704.depth = i705[11]
  i704.clearFlags = i705[12]
  i704.cullingMask = i705[13]
  i704.rect = i705[14]
  request.r(i705[15], i705[16], 0, i704, 'targetTexture')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.type = i707[1]
  i706.color = new pc.Color(i707[2], i707[3], i707[4], i707[5])
  i706.cullingMask = i707[6]
  i706.intensity = i707[7]
  i706.range = i707[8]
  i706.spotAngle = i707[9]
  i706.shadows = i707[10]
  i706.shadowNormalBias = i707[11]
  i706.shadowBias = i707[12]
  i706.shadowStrength = i707[13]
  i706.lightmapBakeType = i707[14]
  i706.renderMode = i707[15]
  request.r(i707[16], i707[17], 0, i706, 'cookie')
  i706.cookieSize = i707[18]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'sharedMesh')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'additionalVertexStreams')
  i710.enabled = !!i711[2]
  request.r(i711[3], i711[4], 0, i710, 'sharedMaterial')
  var i713 = i711[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sharedMaterials = i712
  i710.receiveShadows = !!i711[6]
  i710.shadowCastingMode = i711[7]
  i710.sortingLayerID = i711[8]
  i710.sortingOrder = i711[9]
  i710.lightmapIndex = i711[10]
  i710.lightmapSceneIndex = i711[11]
  i710.lightmapScaleOffset = new pc.Vec4( i711[12], i711[13], i711[14], i711[15] )
  i710.lightProbeUsage = i711[16]
  i710.reflectionProbeUsage = i711[17]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.isTrigger = !!i715[1]
  request.r(i715[2], i715[3], 0, i714, 'material')
  request.r(i715[4], i715[5], 0, i714, 'sharedMesh')
  i714.convex = !!i715[6]
  return i714
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i717 = data
  i716.m_IgnoreReversedGraphics = !!i717[0]
  i716.m_BlockingObjects = i717[1]
  i716.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i717[2] )
  return i716
}

Deserializers["BossHuggy"] = function (request, data, root) {
  var i718 = root || request.c( 'BossHuggy' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'animator')
  i718.yDie = i719[2]
  i718.zDie = i719[3]
  request.r(i719[4], i719[5], 0, i718, 'meshRenderer')
  request.r(i719[6], i719[7], 0, i718, 'canvas')
  request.r(i719[8], i719[9], 0, i718, 'shadow')
  request.r(i719[10], i719[11], 0, i718, 'colliderAttack')
  return i718
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Image' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_Sprite')
  i720.m_Type = i721[2]
  i720.m_PreserveAspect = !!i721[3]
  i720.m_FillCenter = !!i721[4]
  i720.m_FillMethod = i721[5]
  i720.m_FillAmount = i721[6]
  i720.m_FillClockwise = !!i721[7]
  i720.m_FillOrigin = i721[8]
  i720.m_UseSpriteMesh = !!i721[9]
  i720.m_PixelsPerUnitMultiplier = i721[10]
  request.r(i721[11], i721[12], 0, i720, 'm_Material')
  i720.m_Maskable = !!i721[13]
  i720.m_Color = new pc.Color(i721[14], i721[15], i721[16], i721[17])
  i720.m_RaycastTarget = !!i721[18]
  return i720
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Button' )
  var i723 = data
  i722.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i723[0], i722.m_OnClick)
  i722.m_Navigation = request.d('UnityEngine.UI.Navigation', i723[1], i722.m_Navigation)
  i722.m_Transition = i723[2]
  i722.m_Colors = request.d('UnityEngine.UI.ColorBlock', i723[3], i722.m_Colors)
  i722.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i723[4], i722.m_SpriteState)
  i722.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i723[5], i722.m_AnimationTriggers)
  i722.m_Interactable = !!i723[6]
  request.r(i723[7], i723[8], 0, i722, 'm_TargetGraphic')
  return i722
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i725 = data
  i724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i725[0], i724.m_PersistentCalls)
  return i724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('UnityEngine.Events.PersistentCall', i729[i + 0]));
  }
  i726.m_Calls = i728
  return i726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Target')
  i732.m_MethodName = i733[2]
  i732.m_Mode = i733[3]
  i732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i733[4], i732.m_Arguments)
  i732.m_CallState = i733[5]
  return i732
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i735 = data
  i734.m_Mode = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'm_SelectOnUp')
  request.r(i735[3], i735[4], 0, i734, 'm_SelectOnDown')
  request.r(i735[5], i735[6], 0, i734, 'm_SelectOnLeft')
  request.r(i735[7], i735[8], 0, i734, 'm_SelectOnRight')
  return i734
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i737 = data
  i736.m_NormalColor = new pc.Color(i737[0], i737[1], i737[2], i737[3])
  i736.m_HighlightedColor = new pc.Color(i737[4], i737[5], i737[6], i737[7])
  i736.m_PressedColor = new pc.Color(i737[8], i737[9], i737[10], i737[11])
  i736.m_SelectedColor = new pc.Color(i737[12], i737[13], i737[14], i737[15])
  i736.m_DisabledColor = new pc.Color(i737[16], i737[17], i737[18], i737[19])
  i736.m_ColorMultiplier = i737[20]
  i736.m_FadeDuration = i737[21]
  return i736
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_HighlightedSprite')
  request.r(i739[2], i739[3], 0, i738, 'm_PressedSprite')
  request.r(i739[4], i739[5], 0, i738, 'm_SelectedSprite')
  request.r(i739[6], i739[7], 0, i738, 'm_DisabledSprite')
  return i738
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i741 = data
  i740.m_NormalTrigger = i741[0]
  i740.m_HighlightedTrigger = i741[1]
  i740.m_PressedTrigger = i741[2]
  i740.m_SelectedTrigger = i741[3]
  i740.m_DisabledTrigger = i741[4]
  return i740
}

Deserializers["SoundController"] = function (request, data, root) {
  var i742 = root || request.c( 'SoundController' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'audioSourceFX')
  request.r(i743[2], i743[3], 0, i742, 'audioSourceBG')
  request.r(i743[4], i743[5], 0, i742, 'clipChoose')
  request.r(i743[6], i743[7], 0, i742, 'clipMerge')
  request.r(i743[8], i743[9], 0, i742, 'clipLose')
  request.r(i743[10], i743[11], 0, i742, 'clipWin')
  request.r(i743[12], i743[13], 0, i742, 'clipPunch')
  request.r(i743[14], i743[15], 0, i742, 'clipTRex')
  request.r(i743[16], i743[17], 0, i742, 'clipFall')
  request.r(i743[18], i743[19], 0, i742, 'clipSlash')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'clip')
  i744.playOnAwake = !!i745[2]
  i744.loop = !!i745[3]
  i744.time = i745[4]
  i744.volume = i745[5]
  i744.pitch = i745[6]
  i744.enabled = !!i745[7]
  return i744
}

Deserializers["MergeHyper"] = function (request, data, root) {
  var i746 = root || request.c( 'MergeHyper' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'drawLine')
  i746.isCanDraw = !!i747[2]
  i746.isEndGame = !!i747[3]
  request.r(i747[4], i747[5], 0, i746, 'cameraMain')
  request.r(i747[6], i747[7], 0, i746, 'soundController')
  var i749 = i747[8]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.arrPosFighting = i748
  request.r(i747[9], i747[10], 0, i746, 'characterParent')
  request.r(i747[11], i747[12], 0, i746, 'enemyParent')
  var i751 = i747[13]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('CharacterController')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i746.lstCharacter = i750
  var i753 = i747[14]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i746.lstEnemy = i752
  i746.isMergeWin = !!i747[15]
  i746.totalPlayer = i747[16]
  request.r(i747[17], i747[18], 0, i746, 'enemyMerge')
  request.r(i747[19], i747[20], 0, i746, 'characterParent2')
  request.r(i747[21], i747[22], 0, i746, 'enemyParent2')
  i746.countEnd = i747[23]
  request.r(i747[24], i747[25], 0, i746, 'victory')
  request.r(i747[26], i747[27], 0, i746, 'lose')
  request.r(i747[28], i747[29], 0, i746, 'guide')
  request.r(i747[30], i747[31], 0, i746, 'guideHand')
  request.r(i747[32], i747[33], 0, i746, 'guideHand2')
  request.r(i747[34], i747[35], 0, i746, 'guideAttack')
  request.r(i747[36], i747[37], 0, i746, 'fightBtn')
  return i746
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i758 = root || request.c( 'DrawLine' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i761.length; i += 3) {
    i760.add(new pc.Vec3( i761[i + 0], i761[i + 1], i761[i + 2] ));
  }
  i758.lstLinePoints = i760
  request.r(i759[1], i759[2], 0, i758, 'currentLine')
  i758.lineColor = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.lineWidth = i759[7]
  i758.timeDelay = i759[8]
  request.r(i759[9], i759[10], 0, i758, 'linePref')
  return i758
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i764 = root || request.c( 'ShootingRaycast' )
  var i765 = data
  return i764
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_FirstSelected')
  i766.m_sendNavigationEvents = !!i767[2]
  i766.m_DragThreshold = i767[3]
  return i766
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i769 = data
  i768.m_HorizontalAxis = i769[0]
  i768.m_VerticalAxis = i769[1]
  i768.m_SubmitButton = i769[2]
  i768.m_CancelButton = i769[3]
  i768.m_InputActionsPerSecond = i769[4]
  i768.m_RepeatDelay = i769[5]
  i768.m_ForceModuleActive = !!i769[6]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i771 = data
  i770.ambientIntensity = i771[0]
  i770.reflectionIntensity = i771[1]
  i770.ambientMode = i771[2]
  i770.ambientLight = new pc.Color(i771[3], i771[4], i771[5], i771[6])
  i770.ambientSkyColor = new pc.Color(i771[7], i771[8], i771[9], i771[10])
  i770.ambientGroundColor = new pc.Color(i771[11], i771[12], i771[13], i771[14])
  i770.ambientEquatorColor = new pc.Color(i771[15], i771[16], i771[17], i771[18])
  i770.fogColor = new pc.Color(i771[19], i771[20], i771[21], i771[22])
  i770.fogEndDistance = i771[23]
  i770.fogStartDistance = i771[24]
  i770.fogDensity = i771[25]
  i770.fog = !!i771[26]
  request.r(i771[27], i771[28], 0, i770, 'skybox')
  i770.fogMode = i771[29]
  var i773 = i771[30]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i773[i + 0]) );
  }
  i770.lightmaps = i772
  i770.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i771[31], i770.lightProbes)
  i770.lightmapsMode = i771[32]
  i770.environmentLightingMode = i771[33]
  i770.ambientProbe = new pc.SphericalHarmonicsL2(i771[34])
  request.r(i771[35], i771[36], 0, i770, 'customReflection')
  request.r(i771[37], i771[38], 0, i770, 'defaultReflection')
  i770.defaultReflectionMode = i771[39]
  i770.defaultReflectionResolution = i771[40]
  i770.sunLightObjectId = i771[41]
  i770.pixelLightCount = i771[42]
  i770.defaultReflectionHDR = !!i771[43]
  i770.hasLightDataAsset = !!i771[44]
  i770.hasManualGenerate = !!i771[45]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'lightmapColor')
  request.r(i777[2], i777[3], 0, i776, 'lightmapDirection')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i778 = root || new UnityEngine.LightProbes()
  var i779 = data
  return i778
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i784 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i785 = data
  i784.useSafeMode = !!i785[0]
  i784.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i785[1], i784.safeModeOptions)
  i784.timeScale = i785[2]
  i784.useSmoothDeltaTime = !!i785[3]
  i784.maxSmoothUnscaledTime = i785[4]
  i784.rewindCallbackMode = i785[5]
  i784.showUnityEditorReport = !!i785[6]
  i784.logBehaviour = i785[7]
  i784.drawGizmos = !!i785[8]
  i784.defaultRecyclable = !!i785[9]
  i784.defaultAutoPlay = i785[10]
  i784.defaultUpdateType = i785[11]
  i784.defaultTimeScaleIndependent = !!i785[12]
  i784.defaultEaseType = i785[13]
  i784.defaultEaseOvershootOrAmplitude = i785[14]
  i784.defaultEasePeriod = i785[15]
  i784.defaultAutoKill = !!i785[16]
  i784.defaultLoopType = i785[17]
  i784.debugMode = !!i785[18]
  i784.debugStoreTargetId = !!i785[19]
  i784.showPreviewPanel = !!i785[20]
  i784.storeSettingsLocation = i785[21]
  i784.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i785[22], i784.modules)
  i784.createASMDEF = !!i785[23]
  i784.showPlayingTweens = !!i785[24]
  i784.showPausedTweens = !!i785[25]
  return i784
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i786 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i787 = data
  i786.logBehaviour = i787[0]
  i786.nestedTweenFailureBehaviour = i787[1]
  return i786
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i788 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i789 = data
  i788.showPanel = !!i789[0]
  i788.audioEnabled = !!i789[1]
  i788.physicsEnabled = !!i789[2]
  i788.physics2DEnabled = !!i789[3]
  i788.spriteEnabled = !!i789[4]
  i788.uiEnabled = !!i789[5]
  i788.textMeshProEnabled = !!i789[6]
  i788.tk2DEnabled = !!i789[7]
  i788.deAudioEnabled = !!i789[8]
  i788.deUnityExtendedEnabled = !!i789[9]
  i788.epoOutlineEnabled = !!i789[10]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i791 = data
  var i793 = i791[0]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(i793[i + 0]);
  }
  i790.invalidShaderVariants = i792
  i790.name = i791[1]
  i790.guid = i791[2]
  var i795 = i791[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i790.shaderDefinedKeywords = i794
  var i797 = i791[4]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i797[i + 0]) );
  }
  i790.passes = i796
  var i799 = i791[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i799[i + 0]) );
  }
  i790.defaultParameterValues = i798
  request.r(i791[6], i791[7], 0, i790, 'unityFallbackShader')
  i790.readDepth = !!i791[8]
  i790.isCreatedByShaderGraph = !!i791[9]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i806 = root || new pc.UnityShaderPass()
  var i807 = data
  i806.passType = i807[0]
  i806.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.zTest)
  i806.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.zWrite)
  i806.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[3], i806.culling)
  i806.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i807[4], i806.blending)
  i806.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i807[5], i806.alphaBlending)
  i806.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[6], i806.colorWriteMask)
  i806.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[7], i806.offsetUnits)
  i806.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[8], i806.offsetFactor)
  i806.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[9], i806.stencilRef)
  i806.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[10], i806.stencilReadMask)
  i806.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[11], i806.stencilWriteMask)
  i806.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[12], i806.stencilOp)
  i806.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[13], i806.stencilOpFront)
  i806.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[14], i806.stencilOpBack)
  var i809 = i807[15]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i809[i + 0]) );
  }
  i806.tags = i808
  var i811 = i807[16]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.passDefinedKeywords = i810
  var i813 = i807[17]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i813[i + 0]) );
  }
  i806.variants = i812
  i806.readDepth = !!i807[18]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i815 = data
  i814.val = i815[0]
  i814.name = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i817 = data
  i816.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[0], i816.src)
  i816.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[1], i816.dst)
  i816.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[2], i816.op)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i819 = data
  i818.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[0], i818.pass)
  i818.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[1], i818.fail)
  i818.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[2], i818.zFail)
  i818.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[3], i818.comp)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i823 = data
  i822.name = i823[0]
  i822.value = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i826.keywords = i828
  i826.vertexProgram = i827[1]
  i826.fragmentProgram = i827[2]
  i826.readDepth = !!i827[3]
  return i826
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i859 = data
  i858.name = i859[0]
  i858.ascent = i859[1]
  i858.originalLineHeight = i859[2]
  i858.fontSize = i859[3]
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i861[i + 0]) );
  }
  i858.characterInfo = i860
  request.r(i859[5], i859[6], 0, i858, 'texture')
  i858.originalFontSize = i859[7]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i865 = data
  i864.index = i865[0]
  i864.advance = i865[1]
  i864.bearing = i865[2]
  i864.glyphWidth = i865[3]
  i864.glyphHeight = i865[4]
  i864.minX = i865[5]
  i864.maxX = i865[6]
  i864.minY = i865[7]
  i864.maxY = i865[8]
  i864.uvBottomLeftX = i865[9]
  i864.uvBottomLeftY = i865[10]
  i864.uvBottomRightX = i865[11]
  i864.uvBottomRightY = i865[12]
  i864.uvTopLeftX = i865[13]
  i864.uvTopLeftY = i865[14]
  i864.uvTopRightX = i865[15]
  i864.uvTopRightY = i865[16]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i867 = data
  i866.name = i867[0]
  var i869 = i867[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i869[i + 0]) );
  }
  i866.states = i868
  var i871 = i867[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i871[i + 0]) );
  }
  i866.layers = i870
  var i873 = i867[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i873[i + 0]) );
  }
  i866.parameters = i872
  var i875 = i867[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i866.animationClips = i874
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i879 = data
  i878.cycleOffset = i879[0]
  i878.cycleOffsetParameter = i879[1]
  i878.cycleOffsetParameterActive = !!i879[2]
  i878.mirror = !!i879[3]
  i878.mirrorParameter = i879[4]
  i878.mirrorParameterActive = !!i879[5]
  i878.motionId = i879[6]
  i878.nameHash = i879[7]
  i878.fullPathHash = i879[8]
  i878.speed = i879[9]
  i878.speedParameter = i879[10]
  i878.speedParameterActive = !!i879[11]
  i878.tag = i879[12]
  i878.name = i879[13]
  i878.writeDefaultValues = !!i879[14]
  var i881 = i879[15]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i881[i + 0]) );
  }
  i878.transitions = i880
  var i883 = i879[16]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i878.behaviours = i882
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i887 = data
  i886.fullPath = i887[0]
  i886.canTransitionToSelf = !!i887[1]
  i886.duration = i887[2]
  i886.exitTime = i887[3]
  i886.hasExitTime = !!i887[4]
  i886.hasFixedDuration = !!i887[5]
  i886.interruptionSource = i887[6]
  i886.offset = i887[7]
  i886.orderedInterruption = !!i887[8]
  i886.destinationStateNameHash = i887[9]
  i886.destinationStateMachineId = i887[10]
  i886.isExit = !!i887[11]
  i886.mute = !!i887[12]
  i886.solo = !!i887[13]
  var i889 = i887[14]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i889[i + 0]) );
  }
  i886.conditions = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i893 = data
  i892.mode = i893[0]
  i892.parameter = i893[1]
  i892.threshold = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i899 = data
  i898.blendingMode = i899[0]
  i898.defaultWeight = i899[1]
  i898.name = i899[2]
  i898.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i899[3], i898.stateMachine)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i901 = data
  i900.id = i901[0]
  i900.defaultStateNameHash = i901[1]
  var i903 = i901[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i903[i + 0]) );
  }
  i900.entryTransitions = i902
  var i905 = i901[3]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i905[i + 0]) );
  }
  i900.anyStateTransitions = i904
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i909 = data
  i908.destinationStateNameHash = i909[0]
  i908.destinationStateMachineId = i909[1]
  i908.isExit = !!i909[2]
  i908.mute = !!i909[3]
  i908.solo = !!i909[4]
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i911[i + 0]) );
  }
  i908.conditions = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i915 = data
  i914.defaultBool = !!i915[0]
  i914.defaultFloat = i915[1]
  i914.defaultInt = i915[2]
  i914.name = i915[3]
  i914.nameHash = i915[4]
  i914.type = i915[5]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i919[i + 0]) );
  }
  i916.files = i918
  i916.componentToPrefabIds = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i923 = data
  i922.path = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'unityObject')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i927[i + 0]) );
  }
  i924.scriptsExecutionOrder = i926
  var i929 = i925[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i929[i + 0]) );
  }
  i924.sortingLayers = i928
  var i931 = i925[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i931[i + 0]) );
  }
  i924.cullingLayers = i930
  i924.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i925[3], i924.timeSettings)
  i924.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i925[4], i924.physicsSettings)
  i924.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i925[5], i924.physics2DSettings)
  i924.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i925[6], i924.qualitySettings)
  i924.removeShadows = !!i925[7]
  i924.autoInstantiatePrefabs = !!i925[8]
  i924.enableAutoInstancing = !!i925[9]
  i924.lightmapEncodingQuality = i925[10]
  i924.desiredColorSpace = i925[11]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i935 = data
  i934.name = i935[0]
  i934.value = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i939 = data
  i938.id = i939[0]
  i938.name = i939[1]
  i938.value = i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i945 = data
  i944.fixedDeltaTime = i945[0]
  i944.maximumDeltaTime = i945[1]
  i944.timeScale = i945[2]
  i944.maximumParticleTimestep = i945[3]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i947 = data
  i946.gravity = new pc.Vec3( i947[0], i947[1], i947[2] )
  i946.defaultSolverIterations = i947[3]
  i946.bounceThreshold = i947[4]
  i946.autoSyncTransforms = !!i947[5]
  i946.autoSimulation = !!i947[6]
  var i949 = i947[7]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i949[i + 0]) );
  }
  i946.collisionMatrix = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i953 = data
  i952.enabled = !!i953[0]
  i952.layerId = i953[1]
  i952.otherLayerId = i953[2]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'material')
  i954.gravity = new pc.Vec2( i955[2], i955[3] )
  i954.positionIterations = i955[4]
  i954.velocityIterations = i955[5]
  i954.velocityThreshold = i955[6]
  i954.maxLinearCorrection = i955[7]
  i954.maxAngularCorrection = i955[8]
  i954.maxTranslationSpeed = i955[9]
  i954.maxRotationSpeed = i955[10]
  i954.timeToSleep = i955[11]
  i954.linearSleepTolerance = i955[12]
  i954.angularSleepTolerance = i955[13]
  i954.defaultContactOffset = i955[14]
  i954.autoSimulation = !!i955[15]
  i954.queriesHitTriggers = !!i955[16]
  i954.queriesStartInColliders = !!i955[17]
  i954.callbacksOnDisable = !!i955[18]
  i954.reuseCollisionCallbacks = !!i955[19]
  i954.autoSyncTransforms = !!i955[20]
  var i957 = i955[21]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i957[i + 0]) );
  }
  i954.collisionMatrix = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i961 = data
  i960.enabled = !!i961[0]
  i960.layerId = i961[1]
  i960.otherLayerId = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i963 = data
  var i965 = i963[0]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i965[i + 0]) );
  }
  i962.qualityLevels = i964
  var i967 = i963[1]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( i967[i + 0] );
  }
  i962.names = i966
  i962.shadows = i963[2]
  i962.anisotropicFiltering = i963[3]
  i962.antiAliasing = i963[4]
  i962.lodBias = i963[5]
  i962.shadowCascades = i963[6]
  i962.shadowDistance = i963[7]
  i962.shadowmaskMode = i963[8]
  i962.shadowProjection = i963[9]
  i962.shadowResolution = i963[10]
  i962.softParticles = !!i963[11]
  i962.softVegetation = !!i963[12]
  i962.activeColorSpace = i963[13]
  i962.desiredColorSpace = i963[14]
  i962.masterTextureLimit = i963[15]
  i962.maxQueuedFrames = i963[16]
  i962.particleRaycastBudget = i963[17]
  i962.pixelLightCount = i963[18]
  i962.realtimeReflectionProbes = !!i963[19]
  i962.shadowCascade2Split = i963[20]
  i962.shadowCascade4Split = new pc.Vec3( i963[21], i963[22], i963[23] )
  i962.streamingMipmapsActive = !!i963[24]
  i962.vSyncCount = i963[25]
  i962.asyncUploadBufferSize = i963[26]
  i962.asyncUploadTimeSlice = i963[27]
  i962.billboardsFaceCameraPosition = !!i963[28]
  i962.shadowNearPlaneOffset = i963[29]
  i962.streamingMipmapsMemoryBudget = i963[30]
  i962.maximumLODLevel = i963[31]
  i962.streamingMipmapsAddAllCameras = !!i963[32]
  i962.streamingMipmapsMaxLevelReduction = i963[33]
  i962.streamingMipmapsRenderersPerFrame = i963[34]
  i962.resolutionScalingFixedDPIFactor = i963[35]
  i962.streamingMipmapsMaxFileIORequests = i963[36]
  i962.currentQualityLevel = i963[37]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i973 = data
  i972.weight = i973[0]
  i972.vertices = i973[1]
  i972.normals = i973[2]
  i972.tangents = i973[3]
  return i972
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_ObjectArgument')
  i974.m_ObjectArgumentAssemblyTypeName = i975[2]
  i974.m_IntArgument = i975[3]
  i974.m_FloatArgument = i975[4]
  i974.m_StringArgument = i975[5]
  i974.m_BoolArgument = !!i975[6]
  return i974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[9],"57":[29],"58":[11],"59":[11],"60":[11],"61":[11],"62":[11],"63":[11],"64":[11],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[29],"80":[33],"81":[82],"83":[82],"19":[18],"84":[18],"85":[23,18],"35":[19],"37":[23,18],"86":[18],"21":[19],"87":[18],"88":[18],"89":[18],"90":[18],"91":[18],"92":[18],"93":[18],"94":[18],"95":[23,18],"96":[23,18],"97":[18],"98":[18],"99":[18],"100":[18],"8":[23,18],"101":[18],"102":[45],"103":[45],"46":[45],"104":[45],"105":[29],"106":[29]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","CharacterController","UnityEngine.GameObject","UnityEngine.UI.Text","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","LookAtCamera","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","AutoDestroy","UnityEngine.LineRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.UI.GraphicRaycaster","BossHuggy","UnityEngine.UI.Image","UnityEngine.UI.Button","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","MergeHyper","DrawLine","ShootingRaycast","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2019.4.23f1";

Deserializers.productName = "MergeMonster";

Deserializers.lunaInitializationTime = "05/24/2022 03:10:39";

Deserializers.lunaVersion = "3.4.1";

Deserializers.lunaSHA = "329c363da8003b29e1d40d67943fea88087d5759";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.2.16,com.unity.ide.rider: 1.1.4,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.22,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:E:/LunaDownload/3.4.1/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows";

Deserializers.applicationIdentifier = "com.DefaultCompany.MergeMonster";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "60415a25-6528-44bd-b1f4-3e1a628cbdd2";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

