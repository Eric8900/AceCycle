import { MediaHero } from '@/components/ui/media-hero'

function Info() {
    // https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    // https://images.unsplash.com/photo-1673203300654-d973e8944910?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    // https://images.unsplash.com/photo-1673203299634-329d49688670?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    return (
        <div>
            <MediaHero
                mediaType="image"
                src="https://acecycleassets.vercel.app/about_1.jpg"
            >
                <span className="text-2xl font-bold mb-4">Issue</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">Lorem ipsum dolor<br/>sit amet consectetur.</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold h-screen'>Description.</h1>
            <MediaHero
                mediaType="image"
                src="https://acecycleassets.vercel.app/about_1.jpg"
            >
                <span className="text-2xl font-bold mb-4">Issue</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">Lorem ipsum dolor<br/>sit amet consectetur.</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold h-screen'>Description.</h1>
            <MediaHero
                mediaType="image"
                src="https://acecycleassets.vercel.app/about_1.jpg"
            >
                <span className="text-2xl font-bold mb-4">Issue</span>
                <h1 className="md:text-7xl text-4xl font-extrabold mb-2 text-center">Lorem ipsum dolor<br/>sit amet consectetur..</h1>
            </MediaHero>
            <h1 className='flex items-center justify-center text-center font-extrabold h-screen'>Description.</h1>
        </div>
    )
}

export default Info