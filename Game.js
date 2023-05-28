      //zelda: https://imgur.com/a/yrEzcQv
      //BomberMan: https://imgur.com/a/J3lA7FL
      //Mario: : https://imgur.com/a/F8Jkryq
kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0,0,0,1]
  })
   const MOVE_SPEED = 110;
   const ENEMY_SPEED = 60;
  
  loadRoot('https://i.imgur.com/');
  
  
  loadSprite('wall-steel', 'EkleLlt.png'); 
  loadSprite('brick-red', 'C46n8aY.png');
  loadSprite('door', 'Ou9w4gH.png');
  loadSprite('kaboom', 'o9WizfI.png',);
  loadSprite('bg', 'qIXIczt.png');
  loadSprite('wall-gold', 'VtTXsgH.png');
  loadSprite('brick-wood', 'U751RRV.png');
  loadSprite('blue-wood', 'QA257Bj.png');
  loadSprite('bg2', 'u4DVsx6.png');//daqui pra baixo conteudo adaptado 
  loadSprite('stairs', 'VghkL08.png');
  loadSprite('tijolo', 'pogC9x5.png');
  

   
  loadSprite('bomberman', 'T0xbHb8.png', {
    sliceX: 7,
    sliceY: 4,
    anims: {
      
      idleLeft: { from: 21, to: 21 },
      idleRight: { from: 7, to: 7 },
      idleUp: { from: 0, to: 0 },
      idleDown: { from: 14, to: 14 },
  
      moveLeft: { from: 22 , to: 27  },
      moveRigth: { from: 8, to: 13 },
      moveUp: { from: 1, to: 6 },
      moveDown: { from: 15, to: 20 },    
    }
  });
  
  loadSprite('boomber', 'etY46bP.png',{
    sliceX: 3,
    
    anims: {
      move: { from: 0, to: 2 },
    }
  })
  
  loadSprite('baloon', 'z59lNU0.png', { sliceX: 3 })
  loadSprite('ghost', '6YV0Zas.png', { sliceX: 3 })
  loadSprite('slime', 'c1Vj0j1.png', { sliceX: 3 })
  loadSprite('orc', 'c6JFi5Z.png', { sliceX: 3 })
  
  loadSprite('explosion', 'baBxoqs.png', { 
    sliceX: 5,
    sliceY: 5,
  })
  
  
  scene('game', ({level, score}) => {
  //layers(['bg', 'obj', 'ui'], 'obj');
  layers(['bg2', 'obj', 'ui'], 'obj');
    const maps = [
      [//fase1
        'aaaaaaaaaaaaaaaaaa',//1
        'azzzz  *zzzzzzzzza',//2
        'azazazazazazazzzza',//3
        'azzzzzzzzzzzz zz a',//4
        'azazazazazaza zz a',//5
        'azzzz* zzzzzz}zz a',//6
        'azazazazazaza zz}a',//7
        'a zzzzzzzzzzz}zz a',//8
        'a azazazazaza zz a',//9
        'a  zzzdzzzzzzzzz a',//10
        'a azazazazazazaz a',//11
        'azzzzzzzz  *zzzzza',//12
        'aeazazazazazazazza',//13
        'aaaaaaaaaaaaaaaaaa',//14
      ],
      [//fase2
        'bbbbbbbbbbbbbbbbbb',//1
        'bwwww  *wwwwwpwb b',//2
        'bwbwbwbwbwbwbwbw b',//3
        'b      *      ww}b',//4
        'bwbwbwbwbwbwb ww b',//5
        'bwwww* wwwwwwwww b',//6
        'bwbwbwbwb bwb bwwb',//7
        'b wwwwwww}www bw b',//8
        'b bwbwbwb bwbwww b',//9
        'b  wwwwwwwwwwwbw}b',//10
        'b bwbwbwbwbwbwww b',//11
        'bwww  &   wwwwww b',//12
        'bwbwbwbwbwbwbwbwwb',//13
        'bbbbbbbbbbbbbbbbbb',//14
      ],
      [//fase3
        'bababababababababa',//1
        'azwzwzwzw  *  azwa',//2
        'awzbwzazw  &  bwzb',//3
        'bzawbzawbzawbwawza',//4
        'a  &    *    &   b',//5
        'bwazbwazbwabw a& a',//6
        'azbwazbwzbwaz b }b',//7
        'b wzw  *  zwz a& a',//8
        'a  bzwazwbzwa}b  b',//9
        'b   zwzwzwzwz w  a',//10
        'a bwzabz   &  z  b',//11
        'bzwawzbwazbwawzb a',//12
        'aw  &   *    &  db',//13
        'ababababbababababa',//14
      ],
      [//fase4 
      'aaaaaaaaaaaaaaaaaa',//1
      'yy               a',//2
      'yy               a',//3
      'yy               a',//4
      'y                a',//5
      'y                a',//6
      ' y        y      a',//7
      '                 a',//8
      '         s       a',//9
      ' yyyyy           a',//10
      '                 a',//11
      '                 a',//12
      '                 a',//13
      'aaaaaaaaaaaaaaaaaa',//14
    ]

    ]
    const levelCfg = {
      width: 26,
      height: 25.3,
      a: [sprite('wall-steel'), 'wall-steel', solid(), 'wall'],
      z: [sprite('brick-red'), 'wall-brick', solid(), 'wall'],
      d: [sprite('brick-red'), 'wall-brick-dool', solid(), 'wall'],
      e: [sprite('brick-red'), 'wall-brick-est', solid(), 'wall'],
      b: [sprite('wall-gold'), 'wall-gold', solid(), 'wall'],
      w: [sprite('brick-wood'), 'wall-brick', solid(), 'wall'],
      p: [sprite('brick-wood'), 'wall-brick-dool', solid(), 'wall'],
      y: [sprite('tijolo'), 'wall-brick', solid(), 'wall'],
      s: [sprite('tijolo'), 'wall-brick-dool', solid(), 'wall'],
      t: [sprite('door'), 'door', 'wall'],  
      x: [sprite('stairs'), 'stairs', 'wall'],
      '}': [sprite('ghost'), 'dangerous', 'ghost', { dir: -1, timer: 0 }],
      '&': [sprite('slime'), 'slime', { dir: -1 }, 'dangerous', { timer: 0 }],    
      '*': [sprite('baloon'), 'baloon', { dir: -1 }, 'dangerous', { timer: 0 }],
      '%': [sprite('orc'),  'orc', { dir: -1}, 'dangerous', {timer: 0 }],
    }
  
    const gameLevel = addLevel(maps[level], levelCfg);
  
    //add([sprite('bg'), layer('bg')])
    add([sprite('bg2'), layer('bg2')])
  
    const scoreLabel = add([
      text('Score: ' + score),
      pos(483, 30),
      layer('ui'),
      {
        value: score,
      },
      scale(1)
    ])
  
    add([text('Level: ' + parseInt(level + 1)), pos(483, 60), scale(1)])
  
    const player = add([
      sprite('bomberman', {
        animeSpeed: 0.1,
        frame: 14,
      }),
      pos(20,190),
      { dir: vec2(1,0) },
    ])
  
    
      player.action(() => {
      player.pushOutAll()
    })
  
    keyDown('left', () => {
      player.move(-MOVE_SPEED, 0);
      player.dir = vec2(-1, 0);
    })
  
    keyDown('right', () => {
      player.move(MOVE_SPEED, 0);
      player.dir = vec2(1, 0);
    })
  
    keyDown('up', () => {
      player.move(0, -MOVE_SPEED);
      player.dir = vec2(0, -1);
    })  
  
    keyDown('down', () => {
      player.move(0, MOVE_SPEED);
      player.dir = vec2(0, 1);
    })   
  
    keyPress('left', () => {
      player.play('moveLeft')
    })
  
    keyPress('right', () => {
      player.play('moveRigth')
    })
  
    keyPress('up', () => {
      player.play('moveUp')
    })  
  
    keyPress('down', () => {
      player.play('moveDown')
    }) 
    
    keyRelease('left', () => {
      player.play('idleLeft')
    })
  
    keyRelease('right', () => {
      player.play('idleRight')
    })
    
    keyRelease('up', () => {
      player.play('idleUp')
    })
  
    keyRelease('down', () => {
      player.play('idleDown')
    })
  
    keyPress('space', () => {
      spawnBomber(player.pos.add(player.dir.scale(0)))
    })
  

    action('baloon', (s) => {
      s.pushOutAll();
      s.move(s.dir * ENEMY_SPEED, 0)
      s.timer -= dt()
      if (s.timer <= 0) {
        s.dir = -s.dir
        s.timer = rand(5)
      }
    })
  
    action('slime', (s) => {
      s.pushOutAll();
      s.move(s.dir * ENEMY_SPEED, 0)
      s.timer -= dt()
      if (s.timer <= 0) {
        s.dir = -s.dir
        s.timer = rand(5)
      }
    })  
  
    action('ghost', (s) => {
      s.pushOutAll();
      s.move(0 , s.dir * ENEMY_SPEED)
      s.timer -= dt()
      if (s.timer <= 0) {
        s.dir = -s.dir
        s.timer = rand(5)
      }
    }) 
    
    
    action('orc', (s) => {
      s.pushOutAll();
      s.move(0 , s.dir * ENEMY_SPEED)
      s.timer -= dt()
      if (s.timer <= 0) {
        s.dir = -s.dir
        s.timer = rand(5)
      }
    }) 
    
  
    function spawnKaboom(p, frame){
      const obj = add([
        sprite('explosion', {
          animeSpeed: 0.1,
          frame: frame,
        }),
        pos(p),
        scale(1.5),
        'kaboom'
      ])
  
      obj.pushOutAll();
      wait(0.5, () => {
        destroy(obj);
      })
    }
  
    function spawnBomber(p){
      const obj = add([sprite('boomber'), ('move'), pos(p), scale(1.5), 'bomber']);
      obj.pushOutAll();
      obj.play("move");
  
      wait(4, () => {
        destroy(obj);
  
        obj.dir = vec2(1,0)
        spawnKaboom(obj.pos.add(obj.dir.scale(0)), 12) // center
  
        obj.dir = vec2(0, -1)
        spawnKaboom(obj.pos.add(obj.dir.scale(20)), 11) // cima
  
        
        obj.dir = vec2(0, 1)
        spawnKaboom(obj.pos.add(obj.dir.scale(20)), 13) // baixo
  
        
        obj.dir = vec2(-1, 0)
        spawnKaboom(obj.pos.add(obj.dir.scale(20)), 10) // esquerda
  
        obj.dir = vec2(1, 0)
        spawnKaboom(obj.pos.add(obj.dir.scale(20)), 14) // direita
  
      })
    }
  
    // COLLIZÃO
  
    player.collides('door', (d) => {
      go("game", {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      })
    })

    player.collides('stairs', (e) => {
      go("game", {
        level: (level + 3) % maps.length,
        score: scoreLabel.value
      })
    })
  
  
    collides('kaboom', 'dangerous', (k,s) => {
      camShake(4);
       wait(1, () => {
         destroy(k)
       })
       destroy(s);
       scoreLabel.value++
       scoreLabel.text = 'Score: ' + scoreLabel.value
    })
  
  
    collides('kaboom', 'wall-brick', (k,s) => {
      camShake(4);
       wait(1, () => {
         destroy(k)
       })
       destroy(s);
    })
  
    collides('baloon', 'wall', (s) => {
      s.dir = -s.dir;
    })
  
    collides('slime', 'wall', (s) => {
      s.dir = -s.dir;
    })
  
    collides('ghost', 'wall', (s) => {
      s.dir = -s.dir;
    })

    collides('orc', 'wall', (s) => {
      s.dir = -s.dir;
    })
  
    collides('kaboom', 'wall-brick-dool', (k,s) => {
      camShake(4);
      wait(1, () => {
        destroy(k);
      })
      destroy(s);
      gameLevel.spawn('t', s.gridPos.sub(0,0))
    })

    collides('kaboom', 'wall-brick-est', (k,s) => {
      camShake(4);
      wait(1, () => {
        destroy(k);
      })
      destroy(s);
      gameLevel.spawn('x', s.gridPos.sub(0,0))
    })

    player.collides('dangerous', () => {
      go('lose', {score: scoreLabel.value})
    })
    player.collides('kaboom', () => {
      go('lose', {score: scoreLabel.value})
    })
  })
  
  scene('lose', ( { score } ) => {
    add([text('you lose! Score: '+ score, 32,), origin('center'), pos(width() / 2, height() / 2)])

    keyPress('space', () => {
      go('game', { level: 0, score: 0 });
    })
  })
  
  go('game', { level: 0, score: 0 });