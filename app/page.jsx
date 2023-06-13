import Feed from "@components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover a world of prompts
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Prompt engine is an open source AI prompt platform that allows users share and discover the latest prompts</p>
        
        <Feed/>
    </section>

  )
}

export default Home;