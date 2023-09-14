<script>
	import { page } from '$app/stores'

  let status = $page.status
  let errormsg = $page.error.message
</script>

<style>
    h1 {
      animation: anim 4s ease-out infinite;
    }

    @keyframes anim {
      0% {
        transform: rotate3d(0, 0, 0, 0deg);
      }
      50% {
        transform: rotate3d(-1, 1, 0, 50deg);
        text-shadow:
                1rem 1rem 0rem #fbfbfb50,
                2rem 2rem 0rem #fbfbfb50,
                3rem 3rem 0rem #fbfbfb50,
                4rem 4rem 0rem #fbfbfb50,
                5rem 5rem 0rem #fbfbfb50;
      }
      100% {
        transform: rotate3d(0, 0, 0, 0deg);
      }
    }
  </style>

<div class="h-[100dvh] flex flex-col justify-center items-center">
  <h1 class="font-bold text-8xl">{status}</h1>
  <p>{errormsg}</p>
</div>