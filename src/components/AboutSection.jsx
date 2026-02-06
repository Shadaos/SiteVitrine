import { Briefcase, Code, User } from "lucide-react";

const onButtonDowloadCVClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_2026_aurélien_beauchef.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/*colomne de gauche*/}

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate dev ...</h3>
            <p className="text-muted-foreground">
              {" "}
              avec mes 8 annees d experience
              zldbdkezjhbfkjezhbfkjhezbfkjhbezkrhfbjz
            </p>
            <p className="text-muted-foreground">
              {" "}
              avec mes 8 annees d experience
              zldbdkezjhbfkjezhbfkjhezbfkjhbezkrhfbjz
            </p>

            <div className="flex flex-col sm:flew-row gap-4 pt-4 justify-center">
              <a href="https://www.linkedin.com/in/aur%C3%A9lien-beauchef/" className="cosmic-button" target="_blank" rel="noopener noreferrer">
              Get In Touch
          </a>
              <button onClick={onButtonDowloadCVClick} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </button>

            </div>
          </div>

          {/*colomne de droite*/}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Dev</h4>
                  <p className="text-muted-foreground">
                    Creating responsive web
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h6 w-6 text-primary"/>
                </div>
                                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX design</h4>
                  <p className="text-muted-foreground">
                    interface et user experience
                  </p>
                </div>

              </div>

            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h6 w-6 text-primary"/>
                </div>
                                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project managment</h4>
                  <p className="text-muted-foreground">
                    stagiaire et gestion de projet 
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
