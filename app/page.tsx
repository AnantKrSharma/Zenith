import { AccordionNew } from "@/components/accordionNew";
import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";

export default function Home() {
  return <>
      <div className="grid-background"/>
      
      <HeroSection />

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center tracking-tighter mb-12">
              Powerful Features for Your Career Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary transition-colors duration-300 ease-in-out shadow-lg rounded-lg"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
              </Card>
              ))}
            </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl text-center mx-auto">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Industries Covered</p>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">1000+</h3>
                  <p className="text-muted-foreground">Interview Questions</p>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">95%</h3>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-4xl font-bold">24/7</h3>
                  <p className="text-muted-foreground">AI Support</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-center text-muted-foreground">
                Four simple steps to accelerate your career growth with our AI-powered tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center tracking-tighter mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonial.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-background"
                >
                  <CardContent className="pt-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="relative h-12 w-12 flex-shrink-0">
                              <Image  src={testimonial.image} 
                                      alt={testimonial.author} 
                                      width={40} 
                                      height={40} 
                                      className="rounded-full object-cover border-2 border-primary/20 mx-auto mb-4"
                              />
                            </div>
                            <div>
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              <p className="text-sm text-primary">{testimonial.company}</p>
                            </div>
                        </div>
                        <blockquote>
                          <p className="text-muted-foreground italic relative">
                            <span className="text-3xl text-primary absolute -top-3.5 -left-3">
                              &quot;
                            </span>
                            {testimonial.quote}
                            <span className="text-3xl text-primary absolute -bottom-4">
                              &quot;
                            </span>
                          </p>
                        </blockquote>
                    </div>
                  </CardContent>
              </Card>
              ))}
            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-muted-foreground">
                Got questions? We have answers! Here are some common queries about Zenith.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {faqs.map((item, index) => (
                  <AccordionNew title={item.question} content={item.answer} key={index} />
                ))}
            </div>
        </div>
      </section>
    </>
  ;
}
