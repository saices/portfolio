<template>
  <v-container>
    <div class="fluid-xy">
      <h2>Hello, I'm <span class="glitch" data-text="
Lorum">Lorum</span></h2>
      <h1>A front-end developer / creative customizer who loves creating things that are beautiful and functional.</h1>
    </div>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  /* Animation provies a slight random skew. Check bottom of doc
	for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse;

  // Creates a copy before our text.
  &::before {
    // Duplicates our text with the mixin.
    @include glitchCopy;
    // Scoots text slightly to the left for the color offset.
    left: 1px;
    // Creates the color 'shadow' that happens on the glitch.
    text-shadow: -2px 0 #000;
    /* Creates an initial clip for our glitch. This works in
		a typical top,right,bottom,left fashion and creates a mask
		to only show a certain part of the glitch at a time. */
    clip: rect(44px, 450px, 56px, 0);
    /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
		with an alternating animation to keep things fresh. */
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  // Creates a copy after our text. Note comments from ::before.
  &::after {
    @include glitchCopy;
    left: -1px;
    text-shadow: -1px 0 #fff, 1px 1px #000;
    animation: glitch-anim2 1s infinite linear alternate-reverse;
  }
}

/* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

// Same deal, just duplicated for ultra randomness.
@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

// Does the same deal as before, but now only skews. Used for main text.
@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}
</style> 