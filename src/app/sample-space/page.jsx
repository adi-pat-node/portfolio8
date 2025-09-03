"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="Arcade Residence Lisbon" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Regal Residence</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Paris, France</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Europe</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Regal Residence is a celebration of rhythm and light,
                      where soaring colonnades and vaulted arches shape everyday
                      moments with understated majesty.
                    </h3>
                    <h3>
                      The design merges timeless classical proportions with a
                      modern sensibility, crafting a home that honors tradition
                      while embracing the present.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2020</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Residential Architecture</p>
                        <p>Pure Wellness</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Collaborators</p>
                        <p>Craft & Co.</p>
                        <p>Element Works</p>
                        <p>Mira Studio</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Photography</p>
                        <p>Studio Lumen</p>
                        <p>Clara Mendes</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Design Narrative</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  The arches at Regal Residence form a deliberate rhythm that
                  guides you through the home. As you move from courtyard to
                  living space, daylight is framed in shifting ways, altering
                  the atmosphere with each step.
                </h3>

                <h3>
                  Chosen for their timeless quality, pale stone, lime plaster,
                  and timber accents bring texture that welcomes touch and ages
                  beautifully, letting the house grow richer with the years.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Living Spaces</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Atmosphere</p>
                      <p>Serene</p>
                      <p>Muted acoustics</p>
                      <p>Diffused light</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Flow</p>
                      <p>Pathways</p>
                      <p>Directed movement</p>
                      <p>Harmonic rhythm</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Materials</p>
                      <p>Lime plaster walls</p>
                      <p>Natural stone flooring</p>
                      <p>Timber detailing</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Natural Elements</p>
                      <p>Central courtyard</p>
                      <p>Sunlight wells</p>
                      <p>Ventilation breezes</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Arcade Residence interiors and light"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Each element of the residence is designed with sensory
                  awareness in mind, shaping how light, sound, texture, and
                  temperature are experienced in motion.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Next Project"
          callout="Designed for calm and focus"
          description="This space is an exploration of restraint and resonance, where materials, light, and design converge to invite calm."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
