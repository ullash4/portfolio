import React from 'react'


function Home() {
  return (
    <div style={{  
        backgroundImage: "url(" + "https://i.ibb.co/6NFCDHQ/wickedbackground-1.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
       
        <div class="hero min-h-screen z-30">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home