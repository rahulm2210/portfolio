import dynamic from 'next/dynamic'
 
//const Hello1 = dynamic(() => import('../public/assets/vendor/typed.js/typed.umd.js'), { ssr: false })
const Hello2 = dynamic(() => import('../public/assets/vendor/glightbox/js/glightbox.js'), { ssr: false })
const Hello3 = dynamic(() => import('../public/assets/js/mainR.js'), { ssr: false })
 
export default function HelloBundle() {
  return (
    <div>
      <Hello2 />
      <Hello3 />
    </div>
  )
}