var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointSpring' )
  var i1429 = data
  i1428.spring = i1429[0]
  i1428.damper = i1429[1]
  i1428.targetPosition = i1429[2]
  return i1428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointMotor' )
  var i1431 = data
  i1430.m_TargetVelocity = i1431[0]
  i1430.m_Force = i1431[1]
  i1430.m_FreeSpin = i1431[2]
  return i1430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.JointLimits' )
  var i1433 = data
  i1432.m_Min = i1433[0]
  i1432.m_Max = i1433[1]
  i1432.m_Bounciness = i1433[2]
  i1432.m_BounceMinVelocity = i1433[3]
  i1432.m_ContactDistance = i1433[4]
  i1432.minBounce = i1433[5]
  i1432.maxBounce = i1433[6]
  return i1432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointDrive' )
  var i1435 = data
  i1434.m_PositionSpring = i1435[0]
  i1434.m_PositionDamper = i1435[1]
  i1434.m_MaximumForce = i1435[2]
  return i1434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1437 = data
  i1436.m_Spring = i1437[0]
  i1436.m_Damper = i1437[1]
  return i1436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1439 = data
  i1438.m_Limit = i1439[0]
  i1438.m_Bounciness = i1439[1]
  i1438.m_ContactDistance = i1439[2]
  return i1438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1441 = data
  i1440.m_ExtremumSlip = i1441[0]
  i1440.m_ExtremumValue = i1441[1]
  i1440.m_AsymptoteSlip = i1441[2]
  i1440.m_AsymptoteValue = i1441[3]
  i1440.m_Stiffness = i1441[4]
  return i1440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1443 = data
  i1442.m_LowerAngle = i1443[0]
  i1442.m_UpperAngle = i1443[1]
  return i1442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1445 = data
  i1444.m_MotorSpeed = i1445[0]
  i1444.m_MaximumMotorTorque = i1445[1]
  return i1444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1447 = data
  i1446.m_DampingRatio = i1447[0]
  i1446.m_Frequency = i1447[1]
  i1446.m_Angle = i1447[2]
  return i1446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1449 = data
  i1448.m_LowerTranslation = i1449[0]
  i1448.m_UpperTranslation = i1449[1]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1450 = root || new pc.UnityMaterial()
  var i1451 = data
  i1450.name = i1451[0]
  request.r(i1451[1], i1451[2], 0, i1450, 'shader')
  i1450.renderQueue = i1451[3]
  i1450.enableInstancing = !!i1451[4]
  var i1453 = i1451[5]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1453[i + 0]) );
  }
  i1450.floatParameters = i1452
  var i1455 = i1451[6]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1455[i + 0]) );
  }
  i1450.colorParameters = i1454
  var i1457 = i1451[7]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1457[i + 0]) );
  }
  i1450.vectorParameters = i1456
  var i1459 = i1451[8]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1459[i + 0]) );
  }
  i1450.textureParameters = i1458
  var i1461 = i1451[9]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1461[i + 0]) );
  }
  i1450.materialFlags = i1460
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.value = i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.value = new pc.Color(i1469[1], i1469[2], i1469[3], i1469[4])
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.value = new pc.Vec4( i1473[1], i1473[2], i1473[3], i1473[4] )
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1477 = data
  i1476.name = i1477[0]
  request.r(i1477[1], i1477[2], 0, i1476, 'value')
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.enabled = !!i1481[1]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.halfPrecision = !!i1483[1]
  i1482.vertexCount = i1483[2]
  i1482.aabb = i1483[3]
  var i1485 = i1483[4]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( !!i1485[i + 0] );
  }
  i1482.streams = i1484
  i1482.vertices = i1483[5]
  var i1487 = i1483[6]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1487[i + 0]) );
  }
  i1482.subMeshes = i1486
  var i1489 = i1483[7]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 16) {
    i1488.push( new pc.Mat4().setData(i1489[i + 0], i1489[i + 1], i1489[i + 2], i1489[i + 3],  i1489[i + 4], i1489[i + 5], i1489[i + 6], i1489[i + 7],  i1489[i + 8], i1489[i + 9], i1489[i + 10], i1489[i + 11],  i1489[i + 12], i1489[i + 13], i1489[i + 14], i1489[i + 15]) );
  }
  i1482.bindposes = i1488
  var i1491 = i1483[8]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1491[i + 0]) );
  }
  i1482.blendShapes = i1490
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1497 = data
  i1496.triangles = i1497[0]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1503 = data
  i1502.name = i1503[0]
  var i1505 = i1503[1]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1505[i + 0]) );
  }
  i1502.frames = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.width = i1507[1]
  i1506.height = i1507[2]
  i1506.mipmapCount = i1507[3]
  i1506.anisoLevel = i1507[4]
  i1506.filterMode = i1507[5]
  i1506.hdr = !!i1507[6]
  i1506.format = i1507[7]
  i1506.wrapMode = i1507[8]
  i1506.alphaIsTransparency = !!i1507[9]
  i1506.alphaSource = i1507[10]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1509 = data
  i1508.position = new pc.Vec3( i1509[0], i1509[1], i1509[2] )
  i1508.scale = new pc.Vec3( i1509[3], i1509[4], i1509[5] )
  i1508.rotation = new pc.Quat(i1509[6], i1509[7], i1509[8], i1509[9])
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'animatorController')
  i1510.updateMode = i1511[2]
  var i1513 = i1511[3]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.humanBones = i1512
  i1510.enabled = !!i1511[4]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1517 = data
  i1516.center = new pc.Vec3( i1517[0], i1517[1], i1517[2] )
  i1516.size = new pc.Vec3( i1517[3], i1517[4], i1517[5] )
  i1516.enabled = !!i1517[6]
  i1516.isTrigger = !!i1517[7]
  request.r(i1517[8], i1517[9], 0, i1516, 'material')
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1519 = data
  i1518.mass = i1519[0]
  i1518.drag = i1519[1]
  i1518.angularDrag = i1519[2]
  i1518.useGravity = !!i1519[3]
  i1518.isKinematic = !!i1519[4]
  i1518.constraints = i1519[5]
  i1518.maxAngularVelocity = i1519[6]
  i1518.collisionDetectionMode = i1519[7]
  i1518.interpolation = i1519[8]
  return i1518
}

Deserializers["HumanCraft"] = function (request, data, root) {
  var i1520 = root || request.c( 'HumanCraft' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'colliderAttack')
  request.r(i1521[2], i1521[3], 0, i1520, 'hand')
  request.r(i1521[4], i1521[5], 0, i1520, 'head')
  request.r(i1521[6], i1521[7], 0, i1520, 'circle')
  request.r(i1521[8], i1521[9], 0, i1520, 'characterUp')
  request.r(i1521[10], i1521[11], 0, i1520, 'fxSmoke')
  i1520.charScale = new pc.Vec3( i1521[12], i1521[13], i1521[14] )
  i1520.index = i1521[15]
  i1520.isChoosed = !!i1521[16]
  request.r(i1521[17], i1521[18], 0, i1520, 'meshRenderer')
  i1520.isTargetEnemy = !!i1521[19]
  request.r(i1521[20], i1521[21], 0, i1520, 'animator')
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1523 = data
  i1522.enabled = !!i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'sharedMaterial')
  var i1525 = i1523[3]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 2, i1524, '')
  }
  i1522.sharedMaterials = i1524
  i1522.receiveShadows = !!i1523[4]
  i1522.shadowCastingMode = i1523[5]
  i1522.sortingLayerID = i1523[6]
  i1522.sortingOrder = i1523[7]
  i1522.lightmapIndex = i1523[8]
  i1522.lightmapSceneIndex = i1523[9]
  i1522.lightmapScaleOffset = new pc.Vec4( i1523[10], i1523[11], i1523[12], i1523[13] )
  i1522.lightProbeUsage = i1523[14]
  i1522.reflectionProbeUsage = i1523[15]
  request.r(i1523[16], i1523[17], 0, i1522, 'sharedMesh')
  var i1527 = i1523[18]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1522.bones = i1526
  i1522.updateWhenOffscreen = !!i1523[19]
  i1522.localBounds = i1523[20]
  request.r(i1523[21], i1523[22], 0, i1522, 'rootBone')
  var i1529 = i1523[23]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1529[i + 0]) );
  }
  i1522.blendShapesWeights = i1528
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1535 = data
  i1534.weight = i1535[0]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.tag = i1537[1]
  i1536.enabled = !!i1537[2]
  i1536.isStatic = !!i1537[3]
  i1536.layer = i1537[4]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'sharedMesh')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'additionalVertexStreams')
  i1540.enabled = !!i1541[2]
  request.r(i1541[3], i1541[4], 0, i1540, 'sharedMaterial')
  var i1543 = i1541[5]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.sharedMaterials = i1542
  i1540.receiveShadows = !!i1541[6]
  i1540.shadowCastingMode = i1541[7]
  i1540.sortingLayerID = i1541[8]
  i1540.sortingOrder = i1541[9]
  i1540.lightmapIndex = i1541[10]
  i1540.lightmapSceneIndex = i1541[11]
  i1540.lightmapScaleOffset = new pc.Vec4( i1541[12], i1541[13], i1541[14], i1541[15] )
  i1540.lightProbeUsage = i1541[16]
  i1540.reflectionProbeUsage = i1541[17]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1545 = data
  i1544.enabled = !!i1545[0]
  request.r(i1545[1], i1545[2], 0, i1544, 'sharedMaterial')
  var i1547 = i1545[3]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 2, i1546, '')
  }
  i1544.sharedMaterials = i1546
  i1544.receiveShadows = !!i1545[4]
  i1544.shadowCastingMode = i1545[5]
  i1544.sortingLayerID = i1545[6]
  i1544.sortingOrder = i1545[7]
  i1544.lightmapIndex = i1545[8]
  i1544.lightmapSceneIndex = i1545[9]
  i1544.lightmapScaleOffset = new pc.Vec4( i1545[10], i1545[11], i1545[12], i1545[13] )
  i1544.lightProbeUsage = i1545[14]
  i1544.reflectionProbeUsage = i1545[15]
  i1544.color = new pc.Color(i1545[16], i1545[17], i1545[18], i1545[19])
  request.r(i1545[20], i1545[21], 0, i1544, 'sprite')
  i1544.flipX = !!i1545[22]
  i1544.flipY = !!i1545[23]
  i1544.drawMode = i1545[24]
  i1544.size = new pc.Vec2( i1545[25], i1545[26] )
  i1544.tileMode = i1545[27]
  i1544.adaptiveModeThreshold = i1545[28]
  i1544.maskInteraction = i1545[29]
  i1544.spriteSortPoint = i1545[30]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1549 = data
  i1548.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1549[0], i1548.main)
  i1548.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1549[1], i1548.colorBySpeed)
  i1548.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1549[2], i1548.colorOverLifetime)
  i1548.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1549[3], i1548.emission)
  i1548.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1549[4], i1548.rotationBySpeed)
  i1548.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1549[5], i1548.rotationOverLifetime)
  i1548.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1549[6], i1548.shape)
  i1548.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1549[7], i1548.sizeBySpeed)
  i1548.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1549[8], i1548.sizeOverLifetime)
  i1548.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1549[9], i1548.textureSheetAnimation)
  i1548.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1549[10], i1548.velocityOverLifetime)
  i1548.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1549[11], i1548.noise)
  i1548.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1549[12], i1548.inheritVelocity)
  i1548.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1549[13], i1548.forceOverLifetime)
  i1548.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1549[14], i1548.limitVelocityOverLifetime)
  i1548.useAutoRandomSeed = !!i1549[15]
  i1548.randomSeed = i1549[16]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemMain()
  var i1551 = data
  i1550.duration = i1551[0]
  i1550.loop = !!i1551[1]
  i1550.prewarm = !!i1551[2]
  i1550.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[3], i1550.startDelay)
  i1550.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[4], i1550.startLifetime)
  i1550.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[5], i1550.startSpeed)
  i1550.startSize3D = !!i1551[6]
  i1550.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[7], i1550.startSizeX)
  i1550.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[8], i1550.startSizeY)
  i1550.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[9], i1550.startSizeZ)
  i1550.startRotation3D = !!i1551[10]
  i1550.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[11], i1550.startRotationX)
  i1550.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[12], i1550.startRotationY)
  i1550.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[13], i1550.startRotationZ)
  i1550.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1551[14], i1550.startColor)
  i1550.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[15], i1550.gravityModifier)
  i1550.simulationSpace = i1551[16]
  request.r(i1551[17], i1551[18], 0, i1550, 'customSimulationSpace')
  i1550.simulationSpeed = i1551[19]
  i1550.useUnscaledTime = !!i1551[20]
  i1550.scalingMode = i1551[21]
  i1550.playOnAwake = !!i1551[22]
  i1550.maxParticles = i1551[23]
  i1550.emitterVelocityMode = i1551[24]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1552 = root || new pc.MinMaxCurve()
  var i1553 = data
  i1552.mode = i1553[0]
  i1552.curveMin = new pc.AnimationCurve( { keys_flow: i1553[1] } )
  i1552.curveMax = new pc.AnimationCurve( { keys_flow: i1553[2] } )
  i1552.curveMultiplier = i1553[3]
  i1552.constantMin = i1553[4]
  i1552.constantMax = i1553[5]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1554 = root || new pc.MinMaxGradient()
  var i1555 = data
  i1554.mode = i1555[0]
  i1554.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1555[1], i1554.gradientMin)
  i1554.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1555[2], i1554.gradientMax)
  i1554.colorMin = new pc.Color(i1555[3], i1555[4], i1555[5], i1555[6])
  i1554.colorMax = new pc.Color(i1555[7], i1555[8], i1555[9], i1555[10])
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1557 = data
  i1556.mode = i1557[0]
  var i1559 = i1557[1]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1559[i + 0]) );
  }
  i1556.colorKeys = i1558
  var i1561 = i1557[2]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1561[i + 0]) );
  }
  i1556.alphaKeys = i1560
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1562 = root || new pc.ParticleSystemColorBySpeed()
  var i1563 = data
  i1562.enabled = !!i1563[0]
  i1562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1563[1], i1562.color)
  i1562.range = new pc.Vec2( i1563[2], i1563[3] )
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1567 = data
  i1566.color = new pc.Color(i1567[0], i1567[1], i1567[2], i1567[3])
  i1566.time = i1567[4]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1571 = data
  i1570.alpha = i1571[0]
  i1570.time = i1571[1]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemColorOverLifetime()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1573[1], i1572.color)
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemEmitter()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[1], i1574.rateOverTime)
  i1574.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[2], i1574.rateOverDistance)
  var i1577 = i1575[3]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1577[i + 0]) );
  }
  i1574.bursts = i1576
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemBurst()
  var i1581 = data
  i1580.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[0], i1580.count)
  i1580.cycleCount = i1581[1]
  i1580.minCount = i1581[2]
  i1580.maxCount = i1581[3]
  i1580.repeatInterval = i1581[4]
  i1580.time = i1581[5]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemRotationBySpeed()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[1], i1582.x)
  i1582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[2], i1582.y)
  i1582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[3], i1582.z)
  i1582.separateAxes = !!i1583[4]
  i1582.range = new pc.Vec2( i1583[5], i1583[6] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[1], i1584.x)
  i1584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.y)
  i1584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.z)
  i1584.separateAxes = !!i1585[4]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemShape()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.shapeType = i1587[1]
  i1586.randomDirectionAmount = i1587[2]
  i1586.sphericalDirectionAmount = i1587[3]
  i1586.randomPositionAmount = i1587[4]
  i1586.alignToDirection = !!i1587[5]
  i1586.radius = i1587[6]
  i1586.radiusMode = i1587[7]
  i1586.radiusSpread = i1587[8]
  i1586.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[9], i1586.radiusSpeed)
  i1586.radiusThickness = i1587[10]
  i1586.angle = i1587[11]
  i1586.length = i1587[12]
  i1586.boxThickness = new pc.Vec3( i1587[13], i1587[14], i1587[15] )
  i1586.meshShapeType = i1587[16]
  request.r(i1587[17], i1587[18], 0, i1586, 'mesh')
  request.r(i1587[19], i1587[20], 0, i1586, 'meshRenderer')
  request.r(i1587[21], i1587[22], 0, i1586, 'skinnedMeshRenderer')
  i1586.useMeshMaterialIndex = !!i1587[23]
  i1586.meshMaterialIndex = i1587[24]
  i1586.useMeshColors = !!i1587[25]
  i1586.normalOffset = i1587[26]
  i1586.arc = i1587[27]
  i1586.arcMode = i1587[28]
  i1586.arcSpread = i1587[29]
  i1586.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[30], i1586.arcSpeed)
  i1586.donutRadius = i1587[31]
  i1586.position = new pc.Vec3( i1587[32], i1587[33], i1587[34] )
  i1586.rotation = new pc.Vec3( i1587[35], i1587[36], i1587[37] )
  i1586.scale = new pc.Vec3( i1587[38], i1587[39], i1587[40] )
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemSizeBySpeed()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[1], i1588.x)
  i1588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[2], i1588.y)
  i1588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[3], i1588.z)
  i1588.separateAxes = !!i1589[4]
  i1588.range = new pc.Vec2( i1589[5], i1589[6] )
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1590 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[1], i1590.x)
  i1590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[2], i1590.y)
  i1590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[3], i1590.z)
  i1590.separateAxes = !!i1591[4]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1592 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1593 = data
  i1592.enabled = !!i1593[0]
  i1592.mode = i1593[1]
  i1592.animation = i1593[2]
  i1592.numTilesX = i1593[3]
  i1592.numTilesY = i1593[4]
  i1592.useRandomRow = !!i1593[5]
  i1592.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[6], i1592.frameOverTime)
  i1592.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[7], i1592.startFrame)
  i1592.cycleCount = i1593[8]
  i1592.rowIndex = i1593[9]
  i1592.flipU = i1593[10]
  i1592.flipV = i1593[11]
  i1592.spriteCount = i1593[12]
  var i1595 = i1593[13]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 2) {
  request.r(i1595[i + 0], i1595[i + 1], 2, i1594, '')
  }
  i1592.sprites = i1594
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1599 = data
  i1598.enabled = !!i1599[0]
  i1598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[1], i1598.x)
  i1598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[2], i1598.y)
  i1598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[3], i1598.z)
  i1598.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[4], i1598.speedModifier)
  i1598.space = i1599[5]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1600 = root || new pc.ParticleSystemNoise()
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.separateAxes = !!i1601[1]
  i1600.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[2], i1600.strengthX)
  i1600.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[3], i1600.strengthY)
  i1600.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[4], i1600.strengthZ)
  i1600.frequency = i1601[5]
  i1600.damping = !!i1601[6]
  i1600.octaveCount = i1601[7]
  i1600.octaveMultiplier = i1601[8]
  i1600.octaveScale = i1601[9]
  i1600.quality = i1601[10]
  i1600.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[11], i1600.scrollSpeed)
  i1600.scrollSpeedMultiplier = i1601[12]
  i1600.remapEnabled = !!i1601[13]
  i1600.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[14], i1600.remapX)
  i1600.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[15], i1600.remapY)
  i1600.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[16], i1600.remapZ)
  i1600.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[17], i1600.positionAmount)
  i1600.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[18], i1600.rotationAmount)
  i1600.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[19], i1600.sizeAmount)
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1602 = root || new pc.ParticleSystemInheritVelocity()
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.mode = i1603[1]
  i1602.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[2], i1602.curve)
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1604 = root || new pc.ParticleSystemForceOverLifetime()
  var i1605 = data
  i1604.enabled = !!i1605[0]
  i1604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[1], i1604.x)
  i1604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[2], i1604.y)
  i1604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[3], i1604.z)
  i1604.space = i1605[4]
  i1604.randomized = !!i1605[5]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1606 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1607 = data
  i1606.enabled = !!i1607[0]
  i1606.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[1], i1606.limitX)
  i1606.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[2], i1606.limitY)
  i1606.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[3], i1606.limitZ)
  i1606.dampen = i1607[4]
  i1606.separateAxes = !!i1607[5]
  i1606.space = i1607[6]
  i1606.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[7], i1606.drag)
  i1606.multiplyDragByParticleSize = !!i1607[8]
  i1606.multiplyDragByParticleVelocity = !!i1607[9]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1609 = data
  i1608.enabled = !!i1609[0]
  request.r(i1609[1], i1609[2], 0, i1608, 'sharedMaterial')
  var i1611 = i1609[3]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 2) {
  request.r(i1611[i + 0], i1611[i + 1], 2, i1610, '')
  }
  i1608.sharedMaterials = i1610
  i1608.receiveShadows = !!i1609[4]
  i1608.shadowCastingMode = i1609[5]
  i1608.sortingLayerID = i1609[6]
  i1608.sortingOrder = i1609[7]
  i1608.lightmapIndex = i1609[8]
  i1608.lightmapSceneIndex = i1609[9]
  i1608.lightmapScaleOffset = new pc.Vec4( i1609[10], i1609[11], i1609[12], i1609[13] )
  i1608.lightProbeUsage = i1609[14]
  i1608.reflectionProbeUsage = i1609[15]
  request.r(i1609[16], i1609[17], 0, i1608, 'mesh')
  i1608.meshCount = i1609[18]
  i1608.activeVertexStreamsCount = i1609[19]
  i1608.alignment = i1609[20]
  i1608.renderMode = i1609[21]
  i1608.sortMode = i1609[22]
  i1608.lengthScale = i1609[23]
  i1608.velocityScale = i1609[24]
  i1608.cameraVelocityScale = i1609[25]
  i1608.normalDirection = i1609[26]
  i1608.sortingFudge = i1609[27]
  i1608.minParticleSize = i1609[28]
  i1608.maxParticleSize = i1609[29]
  i1608.pivot = new pc.Vec3( i1609[30], i1609[31], i1609[32] )
  request.r(i1609[33], i1609[34], 0, i1608, 'trailMaterial')
  return i1608
}

Deserializers["AutoDestroy"] = function (request, data, root) {
  var i1612 = root || request.c( 'AutoDestroy' )
  var i1613 = data
  i1612.timeOut = i1613[0]
  i1612.typeDestroy = i1613[1]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1615 = data
  i1614.textureMode = i1615[0]
  i1614.alignment = i1615[1]
  i1614.widthCurve = new pc.AnimationCurve( { keys_flow: i1615[2] } )
  i1614.colorGradient = i1615[3] ? new pc.ColorGradient(i1615[3][0], i1615[3][1], i1615[3][2]) : null
  var i1617 = i1615[4]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 3) {
    i1616.push( new pc.Vec3( i1617[i + 0], i1617[i + 1], i1617[i + 2] ) );
  }
  i1614.positions = i1616
  i1614.positionCount = i1615[5]
  i1614.widthMultiplier = i1615[6]
  i1614.startWidth = i1615[7]
  i1614.endWidth = i1615[8]
  i1614.numCornerVertices = i1615[9]
  i1614.numCapVertices = i1615[10]
  i1614.useWorldSpace = !!i1615[11]
  i1614.loop = !!i1615[12]
  i1614.startColor = new pc.Color(i1615[13], i1615[14], i1615[15], i1615[16])
  i1614.endColor = new pc.Color(i1615[17], i1615[18], i1615[19], i1615[20])
  i1614.generateLightingData = !!i1615[21]
  i1614.enabled = !!i1615[22]
  request.r(i1615[23], i1615[24], 0, i1614, 'sharedMaterial')
  var i1619 = i1615[25]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 2) {
  request.r(i1619[i + 0], i1619[i + 1], 2, i1618, '')
  }
  i1614.sharedMaterials = i1618
  i1614.receiveShadows = !!i1615[26]
  i1614.shadowCastingMode = i1615[27]
  i1614.sortingLayerID = i1615[28]
  i1614.sortingOrder = i1615[29]
  i1614.lightmapIndex = i1615[30]
  i1614.lightmapSceneIndex = i1615[31]
  i1614.lightmapScaleOffset = new pc.Vec4( i1615[32], i1615[33], i1615[34], i1615[35] )
  i1614.lightProbeUsage = i1615[36]
  i1614.reflectionProbeUsage = i1615[37]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.atlasId = i1623[1]
  i1622.mipmapCount = i1623[2]
  i1622.hdr = !!i1623[3]
  i1622.size = i1623[4]
  i1622.anisoLevel = i1623[5]
  i1622.filterMode = i1623[6]
  i1622.wrapMode = i1623[7]
  var i1625 = i1623[8]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 4) {
    i1624.push( UnityEngine.Rect.MinMaxRect(i1625[i + 0], i1625[i + 1], i1625[i + 2], i1625[i + 3]) );
  }
  i1622.rects = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1629 = data
  i1628.name = i1629[0]
  i1628.index = i1629[1]
  i1628.startup = !!i1629[2]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.aspect = i1631[1]
  i1630.orthographic = !!i1631[2]
  i1630.orthographicSize = i1631[3]
  i1630.backgroundColor = new pc.Color(i1631[4], i1631[5], i1631[6], i1631[7])
  i1630.nearClipPlane = i1631[8]
  i1630.farClipPlane = i1631[9]
  i1630.fieldOfView = i1631[10]
  i1630.depth = i1631[11]
  i1630.clearFlags = i1631[12]
  i1630.cullingMask = i1631[13]
  i1630.rect = i1631[14]
  request.r(i1631[15], i1631[16], 0, i1630, 'targetTexture')
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.type = i1633[1]
  i1632.color = new pc.Color(i1633[2], i1633[3], i1633[4], i1633[5])
  i1632.cullingMask = i1633[6]
  i1632.intensity = i1633[7]
  i1632.range = i1633[8]
  i1632.spotAngle = i1633[9]
  i1632.shadows = i1633[10]
  i1632.shadowNormalBias = i1633[11]
  i1632.shadowBias = i1633[12]
  i1632.shadowStrength = i1633[13]
  i1632.lightmapBakeType = i1633[14]
  i1632.renderMode = i1633[15]
  request.r(i1633[16], i1633[17], 0, i1632, 'cookie')
  i1632.cookieSize = i1633[18]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.isTrigger = !!i1635[1]
  request.r(i1635[2], i1635[3], 0, i1634, 'material')
  request.r(i1635[4], i1635[5], 0, i1634, 'sharedMesh')
  i1634.convex = !!i1635[6]
  return i1634
}

Deserializers["HuggyCraft"] = function (request, data, root) {
  var i1636 = root || request.c( 'HuggyCraft' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'colliderAttack')
  request.r(i1637[2], i1637[3], 0, i1636, 'circle')
  request.r(i1637[4], i1637[5], 0, i1636, 'characterUp')
  request.r(i1637[6], i1637[7], 0, i1636, 'fxSmoke')
  i1636.charScale = new pc.Vec3( i1637[8], i1637[9], i1637[10] )
  i1636.index = i1637[11]
  i1636.isChoosed = !!i1637[12]
  request.r(i1637[13], i1637[14], 0, i1636, 'meshRenderer')
  i1636.isTargetEnemy = !!i1637[15]
  request.r(i1637[16], i1637[17], 0, i1636, 'animator')
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1639 = data
  i1638.playAutomatically = !!i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'clip')
  var i1641 = i1639[3]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.clips = i1640
  i1638.wrapMode = i1639[4]
  i1638.enabled = !!i1639[5]
  return i1638
}

Deserializers["BunnyBunzoCraft"] = function (request, data, root) {
  var i1644 = root || request.c( 'BunnyBunzoCraft' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'animator')
  i1644.yDie = i1645[2]
  i1644.zDie = i1645[3]
  request.r(i1645[4], i1645[5], 0, i1644, 'meshRenderer')
  request.r(i1645[6], i1645[7], 0, i1644, 'shadow')
  request.r(i1645[8], i1645[9], 0, i1644, 'prefBullet')
  return i1644
}

Deserializers["KillyWillyCraft"] = function (request, data, root) {
  var i1646 = root || request.c( 'KillyWillyCraft' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'animator')
  i1646.yDie = i1647[2]
  i1646.zDie = i1647[3]
  request.r(i1647[4], i1647[5], 0, i1646, 'meshRenderer')
  request.r(i1647[6], i1647[7], 0, i1646, 'shadow')
  request.r(i1647[8], i1647[9], 0, i1646, 'prefBullet')
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1649 = data
  i1648.pivot = new pc.Vec2( i1649[0], i1649[1] )
  i1648.anchorMin = new pc.Vec2( i1649[2], i1649[3] )
  i1648.anchorMax = new pc.Vec2( i1649[4], i1649[5] )
  i1648.sizeDelta = new pc.Vec2( i1649[6], i1649[7] )
  i1648.anchoredPosition3D = new pc.Vec3( i1649[8], i1649[9], i1649[10] )
  i1648.rotation = new pc.Quat(i1649[11], i1649[12], i1649[13], i1649[14])
  i1648.scale = new pc.Vec3( i1649[15], i1649[16], i1649[17] )
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.planeDistance = i1651[1]
  i1650.referencePixelsPerUnit = i1651[2]
  i1650.isFallbackOverlay = !!i1651[3]
  i1650.renderMode = i1651[4]
  i1650.renderOrder = i1651[5]
  i1650.sortingLayerName = i1651[6]
  i1650.sortingOrder = i1651[7]
  i1650.scaleFactor = i1651[8]
  request.r(i1651[9], i1651[10], 0, i1650, 'worldCamera')
  i1650.overrideSorting = !!i1651[11]
  i1650.pixelPerfect = !!i1651[12]
  i1650.targetDisplay = i1651[13]
  i1650.overridePixelPerfect = !!i1651[14]
  return i1650
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1653 = data
  i1652.m_UiScaleMode = i1653[0]
  i1652.m_ReferencePixelsPerUnit = i1653[1]
  i1652.m_ScaleFactor = i1653[2]
  i1652.m_ReferenceResolution = new pc.Vec2( i1653[3], i1653[4] )
  i1652.m_ScreenMatchMode = i1653[5]
  i1652.m_MatchWidthOrHeight = i1653[6]
  i1652.m_PhysicalUnit = i1653[7]
  i1652.m_FallbackScreenDPI = i1653[8]
  i1652.m_DefaultSpriteDPI = i1653[9]
  i1652.m_DynamicPixelsPerUnit = i1653[10]
  return i1652
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1655 = data
  i1654.m_IgnoreReversedGraphics = !!i1655[0]
  i1654.m_BlockingObjects = i1655[1]
  i1654.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1655[2] )
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1657 = data
  i1656.cullTransparentMesh = !!i1657[0]
  return i1656
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Image' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_Sprite')
  i1658.m_Type = i1659[2]
  i1658.m_PreserveAspect = !!i1659[3]
  i1658.m_FillCenter = !!i1659[4]
  i1658.m_FillMethod = i1659[5]
  i1658.m_FillAmount = i1659[6]
  i1658.m_FillClockwise = !!i1659[7]
  i1658.m_FillOrigin = i1659[8]
  i1658.m_UseSpriteMesh = !!i1659[9]
  i1658.m_PixelsPerUnitMultiplier = i1659[10]
  request.r(i1659[11], i1659[12], 0, i1658, 'm_Material')
  i1658.m_Maskable = !!i1659[13]
  i1658.m_Color = new pc.Color(i1659[14], i1659[15], i1659[16], i1659[17])
  i1658.m_RaycastTarget = !!i1659[18]
  return i1658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Button' )
  var i1661 = data
  i1660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1661[0], i1660.m_OnClick)
  i1660.m_Navigation = request.d('UnityEngine.UI.Navigation', i1661[1], i1660.m_Navigation)
  i1660.m_Transition = i1661[2]
  i1660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1661[3], i1660.m_Colors)
  i1660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1661[4], i1660.m_SpriteState)
  i1660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1661[5], i1660.m_AnimationTriggers)
  i1660.m_Interactable = !!i1661[6]
  request.r(i1661[7], i1661[8], 0, i1660, 'm_TargetGraphic')
  return i1660
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1663 = data
  i1662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1663[0], i1662.m_PersistentCalls)
  return i1662
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('UnityEngine.Events.PersistentCall', i1667[i + 0]));
  }
  i1664.m_Calls = i1666
  return i1664
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_Target')
  i1670.m_MethodName = i1671[2]
  i1670.m_Mode = i1671[3]
  i1670.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1671[4], i1670.m_Arguments)
  i1670.m_CallState = i1671[5]
  return i1670
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1673 = data
  i1672.m_Mode = i1673[0]
  request.r(i1673[1], i1673[2], 0, i1672, 'm_SelectOnUp')
  request.r(i1673[3], i1673[4], 0, i1672, 'm_SelectOnDown')
  request.r(i1673[5], i1673[6], 0, i1672, 'm_SelectOnLeft')
  request.r(i1673[7], i1673[8], 0, i1672, 'm_SelectOnRight')
  return i1672
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1675 = data
  i1674.m_NormalColor = new pc.Color(i1675[0], i1675[1], i1675[2], i1675[3])
  i1674.m_HighlightedColor = new pc.Color(i1675[4], i1675[5], i1675[6], i1675[7])
  i1674.m_PressedColor = new pc.Color(i1675[8], i1675[9], i1675[10], i1675[11])
  i1674.m_SelectedColor = new pc.Color(i1675[12], i1675[13], i1675[14], i1675[15])
  i1674.m_DisabledColor = new pc.Color(i1675[16], i1675[17], i1675[18], i1675[19])
  i1674.m_ColorMultiplier = i1675[20]
  i1674.m_FadeDuration = i1675[21]
  return i1674
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_HighlightedSprite')
  request.r(i1677[2], i1677[3], 0, i1676, 'm_PressedSprite')
  request.r(i1677[4], i1677[5], 0, i1676, 'm_SelectedSprite')
  request.r(i1677[6], i1677[7], 0, i1676, 'm_DisabledSprite')
  return i1676
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1679 = data
  i1678.m_NormalTrigger = i1679[0]
  i1678.m_HighlightedTrigger = i1679[1]
  i1678.m_PressedTrigger = i1679[2]
  i1678.m_SelectedTrigger = i1679[3]
  i1678.m_DisabledTrigger = i1679[4]
  return i1678
}

Deserializers["SoundController"] = function (request, data, root) {
  var i1680 = root || request.c( 'SoundController' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'audioSourceFX')
  request.r(i1681[2], i1681[3], 0, i1680, 'audioSourceBG')
  request.r(i1681[4], i1681[5], 0, i1680, 'clipChoose')
  request.r(i1681[6], i1681[7], 0, i1680, 'clipMerge')
  request.r(i1681[8], i1681[9], 0, i1680, 'clipLose')
  request.r(i1681[10], i1681[11], 0, i1680, 'clipWin')
  request.r(i1681[12], i1681[13], 0, i1680, 'clipPunch')
  request.r(i1681[14], i1681[15], 0, i1680, 'clipLightning')
  request.r(i1681[16], i1681[17], 0, i1680, 'clipFall')
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'clip')
  i1682.playOnAwake = !!i1683[2]
  i1682.loop = !!i1683[3]
  i1682.time = i1683[4]
  i1682.volume = i1683[5]
  i1682.pitch = i1683[6]
  i1682.enabled = !!i1683[7]
  return i1682
}

Deserializers["MergeHuggyCraft1"] = function (request, data, root) {
  var i1684 = root || request.c( 'MergeHuggyCraft1' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'drawLine')
  i1684.isCanDraw = !!i1685[2]
  i1684.isEndGame = !!i1685[3]
  request.r(i1685[4], i1685[5], 0, i1684, 'cameraMain')
  request.r(i1685[6], i1685[7], 0, i1684, 'soundController')
  request.r(i1685[8], i1685[9], 0, i1684, 'characterParent')
  request.r(i1685[10], i1685[11], 0, i1684, 'enemyParent')
  var i1687 = i1685[12]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('MainCharacter')))
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 1, i1686, '')
  }
  i1684.lstCharacter = i1686
  var i1689 = i1685[13]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('EnemyController')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1684.lstEnemy = i1688
  i1684.isMergeWin = !!i1685[14]
  i1684.totalPlayer = i1685[15]
  request.r(i1685[16], i1685[17], 0, i1684, 'enemyMerge')
  request.r(i1685[18], i1685[19], 0, i1684, 'characterParent2')
  request.r(i1685[20], i1685[21], 0, i1684, 'enemyParent2')
  request.r(i1685[22], i1685[23], 0, i1684, 'map1')
  request.r(i1685[24], i1685[25], 0, i1684, 'map2')
  request.r(i1685[26], i1685[27], 0, i1684, 'bridge1')
  request.r(i1685[28], i1685[29], 0, i1684, 'bridge2')
  i1684.countEnd = i1685[30]
  request.r(i1685[31], i1685[32], 0, i1684, 'victory')
  request.r(i1685[33], i1685[34], 0, i1684, 'lose')
  request.r(i1685[35], i1685[36], 0, i1684, 'guide')
  request.r(i1685[37], i1685[38], 0, i1684, 'guideHand')
  request.r(i1685[39], i1685[40], 0, i1684, 'guideAttack')
  request.r(i1685[41], i1685[42], 0, i1684, 'gameEndUI')
  request.r(i1685[43], i1685[44], 0, i1684, 'fightBtn')
  return i1684
}

Deserializers["DrawLine"] = function (request, data, root) {
  var i1694 = root || request.c( 'DrawLine' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1697.length; i += 3) {
    i1696.add(new pc.Vec3( i1697[i + 0], i1697[i + 1], i1697[i + 2] ));
  }
  i1694.lstLinePoints = i1696
  request.r(i1695[1], i1695[2], 0, i1694, 'currentLine')
  i1694.lineColor = new pc.Color(i1695[3], i1695[4], i1695[5], i1695[6])
  i1694.lineWidth = i1695[7]
  i1694.timeDelay = i1695[8]
  request.r(i1695[9], i1695[10], 0, i1694, 'linePref')
  return i1694
}

Deserializers["ShootingRaycast"] = function (request, data, root) {
  var i1700 = root || request.c( 'ShootingRaycast' )
  var i1701 = data
  return i1700
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'm_FirstSelected')
  i1702.m_sendNavigationEvents = !!i1703[2]
  i1702.m_DragThreshold = i1703[3]
  return i1702
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1705 = data
  i1704.m_HorizontalAxis = i1705[0]
  i1704.m_VerticalAxis = i1705[1]
  i1704.m_SubmitButton = i1705[2]
  i1704.m_CancelButton = i1705[3]
  i1704.m_InputActionsPerSecond = i1705[4]
  i1704.m_RepeatDelay = i1705[5]
  i1704.m_ForceModuleActive = !!i1705[6]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1707 = data
  i1706.ambientIntensity = i1707[0]
  i1706.reflectionIntensity = i1707[1]
  i1706.ambientMode = i1707[2]
  i1706.ambientLight = new pc.Color(i1707[3], i1707[4], i1707[5], i1707[6])
  i1706.ambientSkyColor = new pc.Color(i1707[7], i1707[8], i1707[9], i1707[10])
  i1706.ambientGroundColor = new pc.Color(i1707[11], i1707[12], i1707[13], i1707[14])
  i1706.ambientEquatorColor = new pc.Color(i1707[15], i1707[16], i1707[17], i1707[18])
  i1706.fogColor = new pc.Color(i1707[19], i1707[20], i1707[21], i1707[22])
  i1706.fogEndDistance = i1707[23]
  i1706.fogStartDistance = i1707[24]
  i1706.fogDensity = i1707[25]
  i1706.fog = !!i1707[26]
  request.r(i1707[27], i1707[28], 0, i1706, 'skybox')
  i1706.fogMode = i1707[29]
  var i1709 = i1707[30]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1709[i + 0]) );
  }
  i1706.lightmaps = i1708
  i1706.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1707[31], i1706.lightProbes)
  i1706.lightmapsMode = i1707[32]
  i1706.environmentLightingMode = i1707[33]
  i1706.ambientProbe = new pc.SphericalHarmonicsL2(i1707[34])
  request.r(i1707[35], i1707[36], 0, i1706, 'customReflection')
  request.r(i1707[37], i1707[38], 0, i1706, 'defaultReflection')
  i1706.defaultReflectionMode = i1707[39]
  i1706.defaultReflectionResolution = i1707[40]
  i1706.sunLightObjectId = i1707[41]
  i1706.pixelLightCount = i1707[42]
  i1706.defaultReflectionHDR = !!i1707[43]
  i1706.hasLightDataAsset = !!i1707[44]
  i1706.hasManualGenerate = !!i1707[45]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'lightmapColor')
  request.r(i1713[2], i1713[3], 0, i1712, 'lightmapDirection')
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1714 = root || new UnityEngine.LightProbes()
  var i1715 = data
  return i1714
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1721 = data
  i1720.useSafeMode = !!i1721[0]
  i1720.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1721[1], i1720.safeModeOptions)
  i1720.timeScale = i1721[2]
  i1720.useSmoothDeltaTime = !!i1721[3]
  i1720.maxSmoothUnscaledTime = i1721[4]
  i1720.rewindCallbackMode = i1721[5]
  i1720.showUnityEditorReport = !!i1721[6]
  i1720.logBehaviour = i1721[7]
  i1720.drawGizmos = !!i1721[8]
  i1720.defaultRecyclable = !!i1721[9]
  i1720.defaultAutoPlay = i1721[10]
  i1720.defaultUpdateType = i1721[11]
  i1720.defaultTimeScaleIndependent = !!i1721[12]
  i1720.defaultEaseType = i1721[13]
  i1720.defaultEaseOvershootOrAmplitude = i1721[14]
  i1720.defaultEasePeriod = i1721[15]
  i1720.defaultAutoKill = !!i1721[16]
  i1720.defaultLoopType = i1721[17]
  i1720.debugMode = !!i1721[18]
  i1720.debugStoreTargetId = !!i1721[19]
  i1720.showPreviewPanel = !!i1721[20]
  i1720.storeSettingsLocation = i1721[21]
  i1720.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1721[22], i1720.modules)
  i1720.createASMDEF = !!i1721[23]
  i1720.showPlayingTweens = !!i1721[24]
  i1720.showPausedTweens = !!i1721[25]
  return i1720
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1722 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1723 = data
  i1722.logBehaviour = i1723[0]
  i1722.nestedTweenFailureBehaviour = i1723[1]
  return i1722
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1724 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1725 = data
  i1724.showPanel = !!i1725[0]
  i1724.audioEnabled = !!i1725[1]
  i1724.physicsEnabled = !!i1725[2]
  i1724.physics2DEnabled = !!i1725[3]
  i1724.spriteEnabled = !!i1725[4]
  i1724.uiEnabled = !!i1725[5]
  i1724.textMeshProEnabled = !!i1725[6]
  i1724.tk2DEnabled = !!i1725[7]
  i1724.deAudioEnabled = !!i1725[8]
  i1724.deUnityExtendedEnabled = !!i1725[9]
  i1724.epoOutlineEnabled = !!i1725[10]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1727 = data
  var i1729 = i1727[0]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.add(i1729[i + 0]);
  }
  i1726.invalidShaderVariants = i1728
  i1726.name = i1727[1]
  i1726.guid = i1727[2]
  var i1731 = i1727[3]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( i1731[i + 0] );
  }
  i1726.shaderDefinedKeywords = i1730
  var i1733 = i1727[4]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1733[i + 0]) );
  }
  i1726.passes = i1732
  var i1735 = i1727[5]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1735[i + 0]) );
  }
  i1726.defaultParameterValues = i1734
  request.r(i1727[6], i1727[7], 0, i1726, 'unityFallbackShader')
  i1726.readDepth = !!i1727[8]
  i1726.isCreatedByShaderGraph = !!i1727[9]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1742 = root || new pc.UnityShaderPass()
  var i1743 = data
  i1742.passType = i1743[0]
  i1742.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[1], i1742.zTest)
  i1742.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[2], i1742.zWrite)
  i1742.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[3], i1742.culling)
  i1742.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1743[4], i1742.blending)
  i1742.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1743[5], i1742.alphaBlending)
  i1742.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[6], i1742.colorWriteMask)
  i1742.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[7], i1742.offsetUnits)
  i1742.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[8], i1742.offsetFactor)
  i1742.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[9], i1742.stencilRef)
  i1742.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[10], i1742.stencilReadMask)
  i1742.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[11], i1742.stencilWriteMask)
  i1742.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1743[12], i1742.stencilOp)
  i1742.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1743[13], i1742.stencilOpFront)
  i1742.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1743[14], i1742.stencilOpBack)
  var i1745 = i1743[15]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1745[i + 0]) );
  }
  i1742.tags = i1744
  var i1747 = i1743[16]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1742.passDefinedKeywords = i1746
  var i1749 = i1743[17]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1749[i + 0]) );
  }
  i1742.variants = i1748
  i1742.readDepth = !!i1743[18]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1751 = data
  i1750.val = i1751[0]
  i1750.name = i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1753 = data
  i1752.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1753[0], i1752.src)
  i1752.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1753[1], i1752.dst)
  i1752.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1753[2], i1752.op)
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1755 = data
  i1754.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[0], i1754.pass)
  i1754.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[1], i1754.fail)
  i1754.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[2], i1754.zFail)
  i1754.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[3], i1754.comp)
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1759 = data
  i1758.name = i1759[0]
  i1758.value = i1759[1]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( i1765[i + 0] );
  }
  i1762.keywords = i1764
  i1762.vertexProgram = i1763[1]
  i1762.fragmentProgram = i1763[2]
  i1762.readDepth = !!i1763[3]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.type = i1769[1]
  i1768.value = new pc.Vec4( i1769[2], i1769[3], i1769[4], i1769[5] )
  i1768.textureValue = i1769[6]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1771 = data
  i1770.name = i1771[0]
  request.r(i1771[1], i1771[2], 0, i1770, 'texture')
  i1770.aabb = i1771[3]
  i1770.vertices = i1771[4]
  i1770.triangles = i1771[5]
  i1770.textureRect = UnityEngine.Rect.MinMaxRect(i1771[6], i1771[7], i1771[8], i1771[9])
  i1770.packedRect = UnityEngine.Rect.MinMaxRect(i1771[10], i1771[11], i1771[12], i1771[13])
  i1770.border = new pc.Vec4( i1771[14], i1771[15], i1771[16], i1771[17] )
  i1770.transparency = i1771[18]
  i1770.bounds = i1771[19]
  i1770.pixelsPerUnit = i1771[20]
  i1770.textureWidth = i1771[21]
  i1770.textureHeight = i1771[22]
  i1770.nativeSize = new pc.Vec2( i1771[23], i1771[24] )
  i1770.pivot = new pc.Vec2( i1771[25], i1771[26] )
  i1770.textureRectOffset = new pc.Vec2( i1771[27], i1771[28] )
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1773 = data
  i1772.name = i1773[0]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1775 = data
  i1774.name = i1775[0]
  i1774.wrapMode = i1775[1]
  i1774.isLooping = !!i1775[2]
  i1774.length = i1775[3]
  var i1777 = i1775[4]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1777[i + 0]) );
  }
  i1774.curves = i1776
  var i1779 = i1775[5]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1779[i + 0]) );
  }
  i1774.events = i1778
  i1774.halfPrecision = !!i1775[6]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1783 = data
  i1782.path = i1783[0]
  i1782.componentType = i1783[1]
  i1782.property = i1783[2]
  i1782.keys = i1783[3]
  var i1785 = i1783[4]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1785[i + 0]) );
  }
  i1782.objectReferenceKeys = i1784
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1789 = data
  i1788.time = i1789[0]
  request.r(i1789[1], i1789[2], 0, i1788, 'value')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1793 = data
  i1792.functionName = i1793[0]
  i1792.floatParameter = i1793[1]
  i1792.intParameter = i1793[2]
  i1792.stringParameter = i1793[3]
  request.r(i1793[4], i1793[5], 0, i1792, 'objectReferenceParameter')
  i1792.time = i1793[6]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1795 = data
  i1794.name = i1795[0]
  var i1797 = i1795[1]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1797[i + 0]) );
  }
  i1794.states = i1796
  var i1799 = i1795[2]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1799[i + 0]) );
  }
  i1794.layers = i1798
  var i1801 = i1795[3]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1801[i + 0]) );
  }
  i1794.parameters = i1800
  var i1803 = i1795[4]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( i1803[i + 0] );
  }
  i1794.animationClips = i1802
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1807 = data
  i1806.cycleOffset = i1807[0]
  i1806.cycleOffsetParameter = i1807[1]
  i1806.cycleOffsetParameterActive = !!i1807[2]
  i1806.mirror = !!i1807[3]
  i1806.mirrorParameter = i1807[4]
  i1806.mirrorParameterActive = !!i1807[5]
  i1806.motionId = i1807[6]
  i1806.nameHash = i1807[7]
  i1806.fullPathHash = i1807[8]
  i1806.speed = i1807[9]
  i1806.speedParameter = i1807[10]
  i1806.speedParameterActive = !!i1807[11]
  i1806.tag = i1807[12]
  i1806.name = i1807[13]
  i1806.writeDefaultValues = !!i1807[14]
  var i1809 = i1807[15]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1809[i + 0]) );
  }
  i1806.transitions = i1808
  var i1811 = i1807[16]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 2, i1810, '')
  }
  i1806.behaviours = i1810
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1815 = data
  i1814.fullPath = i1815[0]
  i1814.canTransitionToSelf = !!i1815[1]
  i1814.duration = i1815[2]
  i1814.exitTime = i1815[3]
  i1814.hasExitTime = !!i1815[4]
  i1814.hasFixedDuration = !!i1815[5]
  i1814.interruptionSource = i1815[6]
  i1814.offset = i1815[7]
  i1814.orderedInterruption = !!i1815[8]
  i1814.destinationStateNameHash = i1815[9]
  i1814.destinationStateMachineId = i1815[10]
  i1814.isExit = !!i1815[11]
  i1814.mute = !!i1815[12]
  i1814.solo = !!i1815[13]
  var i1817 = i1815[14]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1817[i + 0]) );
  }
  i1814.conditions = i1816
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1821 = data
  i1820.mode = i1821[0]
  i1820.parameter = i1821[1]
  i1820.threshold = i1821[2]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1827 = data
  i1826.blendingMode = i1827[0]
  i1826.defaultWeight = i1827[1]
  i1826.name = i1827[2]
  i1826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1827[3], i1826.stateMachine)
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1829 = data
  i1828.id = i1829[0]
  i1828.defaultStateNameHash = i1829[1]
  var i1831 = i1829[2]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1831[i + 0]) );
  }
  i1828.entryTransitions = i1830
  var i1833 = i1829[3]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1833[i + 0]) );
  }
  i1828.anyStateTransitions = i1832
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1837 = data
  i1836.destinationStateNameHash = i1837[0]
  i1836.destinationStateMachineId = i1837[1]
  i1836.isExit = !!i1837[2]
  i1836.mute = !!i1837[3]
  i1836.solo = !!i1837[4]
  var i1839 = i1837[5]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1839[i + 0]) );
  }
  i1836.conditions = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1843 = data
  i1842.defaultBool = !!i1843[0]
  i1842.defaultFloat = i1843[1]
  i1842.defaultInt = i1843[2]
  i1842.name = i1843[3]
  i1842.nameHash = i1843[4]
  i1842.type = i1843[5]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1845 = data
  var i1847 = i1845[0]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1847[i + 0]) );
  }
  i1844.files = i1846
  i1844.componentToPrefabIds = i1845[1]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1851 = data
  i1850.path = i1851[0]
  request.r(i1851[1], i1851[2], 0, i1850, 'unityObject')
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1853 = data
  var i1855 = i1853[0]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1855[i + 0]) );
  }
  i1852.scriptsExecutionOrder = i1854
  var i1857 = i1853[1]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1857[i + 0]) );
  }
  i1852.sortingLayers = i1856
  var i1859 = i1853[2]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1859[i + 0]) );
  }
  i1852.cullingLayers = i1858
  i1852.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1853[3], i1852.timeSettings)
  i1852.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1853[4], i1852.physicsSettings)
  i1852.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1853[5], i1852.physics2DSettings)
  i1852.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1853[6], i1852.qualitySettings)
  i1852.removeShadows = !!i1853[7]
  i1852.autoInstantiatePrefabs = !!i1853[8]
  i1852.enableAutoInstancing = !!i1853[9]
  i1852.lightmapEncodingQuality = i1853[10]
  i1852.desiredColorSpace = i1853[11]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1867 = data
  i1866.id = i1867[0]
  i1866.name = i1867[1]
  i1866.value = i1867[2]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.name = i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1873 = data
  i1872.fixedDeltaTime = i1873[0]
  i1872.maximumDeltaTime = i1873[1]
  i1872.timeScale = i1873[2]
  i1872.maximumParticleTimestep = i1873[3]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1875 = data
  i1874.gravity = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.defaultSolverIterations = i1875[3]
  i1874.bounceThreshold = i1875[4]
  i1874.autoSyncTransforms = !!i1875[5]
  i1874.autoSimulation = !!i1875[6]
  var i1877 = i1875[7]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1877[i + 0]) );
  }
  i1874.collisionMatrix = i1876
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.layerId = i1881[1]
  i1880.otherLayerId = i1881[2]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'material')
  i1882.gravity = new pc.Vec2( i1883[2], i1883[3] )
  i1882.positionIterations = i1883[4]
  i1882.velocityIterations = i1883[5]
  i1882.velocityThreshold = i1883[6]
  i1882.maxLinearCorrection = i1883[7]
  i1882.maxAngularCorrection = i1883[8]
  i1882.maxTranslationSpeed = i1883[9]
  i1882.maxRotationSpeed = i1883[10]
  i1882.timeToSleep = i1883[11]
  i1882.linearSleepTolerance = i1883[12]
  i1882.angularSleepTolerance = i1883[13]
  i1882.defaultContactOffset = i1883[14]
  i1882.autoSimulation = !!i1883[15]
  i1882.queriesHitTriggers = !!i1883[16]
  i1882.queriesStartInColliders = !!i1883[17]
  i1882.callbacksOnDisable = !!i1883[18]
  i1882.reuseCollisionCallbacks = !!i1883[19]
  i1882.autoSyncTransforms = !!i1883[20]
  var i1885 = i1883[21]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1885[i + 0]) );
  }
  i1882.collisionMatrix = i1884
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1889 = data
  i1888.enabled = !!i1889[0]
  i1888.layerId = i1889[1]
  i1888.otherLayerId = i1889[2]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1893[i + 0]) );
  }
  i1890.qualityLevels = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1890.names = i1894
  i1890.shadows = i1891[2]
  i1890.anisotropicFiltering = i1891[3]
  i1890.antiAliasing = i1891[4]
  i1890.lodBias = i1891[5]
  i1890.shadowCascades = i1891[6]
  i1890.shadowDistance = i1891[7]
  i1890.shadowmaskMode = i1891[8]
  i1890.shadowProjection = i1891[9]
  i1890.shadowResolution = i1891[10]
  i1890.softParticles = !!i1891[11]
  i1890.softVegetation = !!i1891[12]
  i1890.activeColorSpace = i1891[13]
  i1890.desiredColorSpace = i1891[14]
  i1890.masterTextureLimit = i1891[15]
  i1890.maxQueuedFrames = i1891[16]
  i1890.particleRaycastBudget = i1891[17]
  i1890.pixelLightCount = i1891[18]
  i1890.realtimeReflectionProbes = !!i1891[19]
  i1890.shadowCascade2Split = i1891[20]
  i1890.shadowCascade4Split = new pc.Vec3( i1891[21], i1891[22], i1891[23] )
  i1890.streamingMipmapsActive = !!i1891[24]
  i1890.vSyncCount = i1891[25]
  i1890.asyncUploadBufferSize = i1891[26]
  i1890.asyncUploadTimeSlice = i1891[27]
  i1890.billboardsFaceCameraPosition = !!i1891[28]
  i1890.shadowNearPlaneOffset = i1891[29]
  i1890.streamingMipmapsMemoryBudget = i1891[30]
  i1890.maximumLODLevel = i1891[31]
  i1890.streamingMipmapsAddAllCameras = !!i1891[32]
  i1890.streamingMipmapsMaxLevelReduction = i1891[33]
  i1890.streamingMipmapsRenderersPerFrame = i1891[34]
  i1890.resolutionScalingFixedDPIFactor = i1891[35]
  i1890.streamingMipmapsMaxFileIORequests = i1891[36]
  i1890.currentQualityLevel = i1891[37]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1901 = data
  i1900.weight = i1901[0]
  i1900.vertices = i1901[1]
  i1900.normals = i1901[2]
  i1900.tangents = i1901[3]
  return i1900
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'm_ObjectArgument')
  i1902.m_ObjectArgumentAssemblyTypeName = i1903[2]
  i1902.m_IntArgument = i1903[3]
  i1902.m_FloatArgument = i1903[4]
  i1902.m_StringArgument = i1903[5]
  i1902.m_BoolArgument = !!i1903[6]
  return i1902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[9],"56":[21],"57":[6],"58":[6],"59":[6],"60":[6],"61":[6],"62":[6],"63":[6],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[21],"79":[14],"80":[81],"82":[81],"31":[30],"83":[30],"84":[35,30],"34":[31],"36":[35,30],"85":[30],"33":[31],"86":[30],"87":[30],"88":[30],"89":[30],"90":[30],"91":[30],"92":[30],"93":[30],"94":[35,30],"95":[35,30],"96":[30],"97":[30],"98":[30],"99":[30],"100":[35,30],"101":[30],"102":[44],"103":[44],"45":[44],"104":[44],"105":[21],"106":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","HumanCraft","UnityEngine.SkinnedMeshRenderer","UnityEngine.GameObject","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","AutoDestroy","UnityEngine.LineRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshCollider","HuggyCraft","UnityEngine.Animation","UnityEngine.AnimationClip","BunnyBunzoCraft","KillyWillyCraft","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","MergeHuggyCraft1","DrawLine","ShootingRaycast","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2019.4.23f1";

Deserializers.productName = "MergeMonster";

Deserializers.lunaInitializationTime = "07/01/2022 03:28:07";

Deserializers.lunaVersion = "3.4.1";

Deserializers.lunaSHA = "329c363da8003b29e1d40d67943fea88087d5759";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.2.16,com.unity.ide.rider: 1.1.4,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.22,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:E:/LunaDownload/3.4.1/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows";

Deserializers.applicationIdentifier = "com.DefaultCompany.MergeMonster";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "bbcc9f55-ddfb-4551-ba2e-3ed0c609aa8e";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

