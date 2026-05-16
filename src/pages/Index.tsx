import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { BookOpen, Mail, MessageCircle, GraduationCap, ChevronDown, Eye, Download, Menu, X } from "lucide-react";
import InstituteBrand from "@/components/InstituteBrand";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import IslamicLearningSection from "@/components/IslamicLearningSection";

import ContactSection from "@/components/ContactSection";
import PlatformLinks from "@/components/PlatformLinks";
import {
  INSTITUTE_NAME,
  INSTITUTE_NAME_SHORT,
  PHONE_DISPLAY,
  EMAIL,
  EMAIL_URL,
  PHONE_URL,
  openWhatsApp,
  openEmail,
  buildEnrollmentMessage,
  buildContactEmailBody,
} from "@/lib/institute";

const Index = () => {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    experience: "",
    message: ""
  });

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleWhatsAppClick = () => openWhatsApp();

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(buildEnrollmentMessage(enrollmentData));
    toast({
      title: "Enrollment Submitted! 🎉",
      description: "WhatsApp is opening with your details. We'll contact you within 24 hours.",
    });
    setEnrollDialogOpen(false);
    setEnrollmentData({
      name: "",
      email: "",
      phone: "",
      age: "",
      course: "",
      experience: "",
      message: ""
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEmail(
      contactData.subject || `Contact from ${contactData.name}`,
      buildContactEmailBody(contactData)
    );
    toast({
      title: "Opening your email app 📩",
      description: `Send the message to ${EMAIL} and we'll respond soon.`,
    });
    setContactDialogOpen(false);
    setContactData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-section-bg">
      {/* Enhanced Mobile-Responsive Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-gradient-card-bg backdrop-blur supports-[backdrop-filter]:bg-gradient-card-bg/60 shadow-sm">
        <div className="container mx-auto px-4 min-h-16 py-2 flex items-center justify-between gap-2">
          {/* Logo and Institute Name */}
          <InstituteBrand variant="header" className="animate-fade-in-left max-w-[55%] sm:max-w-none" />

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-3 animate-fade-in-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-gradient-accent hover:border-primary/50 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Noorani Qaida
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem 
                  onClick={() => window.open('/Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu-PDF-File-3-42.pdf', '_blank')}
                  className="cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View PDF
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu-PDF-File-3-42.pdf';
                    link.download = 'Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="cursor-pointer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hover:bg-gradient-accent hover:border-primary/50 transition-all duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-primary">Contact Us</DialogTitle>
                  <DialogDescription>
                    Send us a message and we'll get back to you soon.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        value={contactData.phone}
                        onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        value={contactData.subject}
                        onChange={(e) => setContactData({...contactData, subject: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="islamic">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
            <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="enroll" size="sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Enroll Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-primary">Join {INSTITUTE_NAME_SHORT}</DialogTitle>
                  <DialogDescription>
                    Begin your Islamic learning journey with us. Fill out the form below to enroll.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="enroll-name">Full Name *</Label>
                      <Input
                        id="enroll-name"
                        value={enrollmentData.name}
                        onChange={(e) => setEnrollmentData({...enrollmentData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="enroll-email">Email *</Label>
                      <Input
                        id="enroll-email"
                        type="email"
                        value={enrollmentData.email}
                        onChange={(e) => setEnrollmentData({...enrollmentData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="enroll-phone">Phone *</Label>
                      <Input
                        id="enroll-phone"
                        value={enrollmentData.phone}
                        onChange={(e) => setEnrollmentData({...enrollmentData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="enroll-age">Age</Label>
                      <Input
                        id="enroll-age"
                        value={enrollmentData.age}
                        onChange={(e) => setEnrollmentData({...enrollmentData, age: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="enroll-course">Course Interest *</Label>
                    <Select value={enrollmentData.course} onValueChange={(value) => setEnrollmentData({...enrollmentData, course: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tajweed">Tajweed (Quran Recitation)</SelectItem>
                        <SelectItem value="tarjuma">Tarjuma (Translation)</SelectItem>
                        <SelectItem value="tafseer">Tafseer (Explanation)</SelectItem>
                        <SelectItem value="hifz">Hifz Program (Memorization)</SelectItem>
                        <SelectItem value="nazra">Nazra Program</SelectItem>
                        <SelectItem value="duas">Short Surahs & Duas</SelectItem>
                        <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                        <SelectItem value="arabic">Arabic Language</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="enroll-experience">Previous Experience</Label>
                    <Select value={enrollmentData.experience} onValueChange={(value) => setEnrollmentData({...enrollmentData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="basic">Basic Level</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="enroll-message">Additional Message</Label>
                    <Textarea
                      id="enroll-message"
                      value={enrollmentData.message}
                      onChange={(e) => setEnrollmentData({...enrollmentData, message: e.target.value})}
                      rows={3}
                      placeholder="Tell us about your learning goals..."
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="enroll">
                    Submit Enrollment
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Slides down when open */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-gradient-card-bg/95 backdrop-blur">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {/* Noorani Qaida Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Noorani Qaida</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('/Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu-PDF-File-3-42.pdf', '_blank')}
                    className="text-xs"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View PDF
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu-PDF-File-3-42.pdf';
                    link.download = 'Noorani-Qaida-With-Tajweed-Rules-In-English-Urdu.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="text-xs w-full justify-start"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </div>

              <Separator />

              {/* Contact Us Button */}
              <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Contact Us</DialogTitle>
                    <DialogDescription>
                      Send us a message and we'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Name *</Label>
                        <Input
                          id="contact-name"
                          value={contactData.name}
                          onChange={(e) => setContactData({...contactData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={contactData.email}
                          onChange={(e) => setContactData({...contactData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-phone">Phone</Label>
                        <Input
                          id="contact-phone"
                          value={contactData.phone}
                          onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Input
                          id="contact-subject"
                          value={contactData.subject}
                          onChange={(e) => setContactData({...contactData, subject: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        value={contactData.message}
                        onChange={(e) => setContactData({...contactData, message: e.target.value})}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" variant="islamic">
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* WhatsApp Button */}
              <Button 
                variant="whatsapp" 
                size="sm" 
                onClick={() => {
                  handleWhatsAppClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>

              {/* Enroll Now Button */}
              <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="enroll" 
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Join {INSTITUTE_NAME_SHORT}</DialogTitle>
                    <DialogDescription>
                      Begin your Islamic learning journey with us. Fill out the form below to enroll.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="enroll-name">Full Name *</Label>
                        <Input
                          id="enroll-name"
                          value={enrollmentData.name}
                          onChange={(e) => setEnrollmentData({...enrollmentData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="enroll-email">Email *</Label>
                        <Input
                          id="enroll-email"
                          type="email"
                          value={enrollmentData.email}
                          onChange={(e) => setEnrollmentData({...enrollmentData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="enroll-phone">Phone *</Label>
                        <Input
                          id="enroll-phone"
                          value={enrollmentData.phone}
                          onChange={(e) => setEnrollmentData({...enrollmentData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="enroll-age">Age</Label>
                        <Input
                          id="enroll-age"
                          value={enrollmentData.age}
                          onChange={(e) => setEnrollmentData({...enrollmentData, age: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="enroll-course">Course Interest *</Label>
                      <Select value={enrollmentData.course} onValueChange={(value) => setEnrollmentData({...enrollmentData, course: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tajweed">Tajweed (Quran Recitation)</SelectItem>
                          <SelectItem value="tarjuma">Tarjuma (Translation)</SelectItem>
                          <SelectItem value="tafseer">Tafseer (Explanation)</SelectItem>
                          <SelectItem value="hifz">Hifz Program (Memorization)</SelectItem>
                          <SelectItem value="nazra">Nazra Program</SelectItem>
                          <SelectItem value="duas">Short Surahs & Duas</SelectItem>
                          <SelectItem value="islamic-studies">Islamic Studies</SelectItem>
                          <SelectItem value="arabic">Arabic Language</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="enroll-experience">Previous Experience</Label>
                      <Select value={enrollmentData.experience} onValueChange={(value) => setEnrollmentData({...enrollmentData, experience: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="basic">Basic Level</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="enroll-message">Additional Message</Label>
                      <Textarea
                        id="enroll-message"
                        value={enrollmentData.message}
                        onChange={(e) => setEnrollmentData({...enrollmentData, message: e.target.value})}
                        rows={3}
                        placeholder="Tell us about your learning goals..."
                      />
                    </div>
                    <Button type="submit" className="w-full" variant="enroll">
                      Submit Enrollment
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </nav>

              {/* Main Content */}
        <main>
          <HeroSection onEnrollClick={() => setEnrollDialogOpen(true)} />
          
          {/* Statistics Section with Gradients */}
          <section className="py-16 bg-gradient-section-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-overlay opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Our Achievements
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of students worldwide who trust {INSTITUTE_NAME_SHORT}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-gradient-card-bg rounded-lg p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold stats-color mb-2">1000+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Students Worldwide</div>
                  </div>
                </div>
                <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-gradient-card-bg rounded-lg p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold stats-color mb-2">50+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Certified Teachers</div>
                  </div>
                </div>
                <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: '0.6s' }}>
                  <div className="bg-gradient-card-bg rounded-lg p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold stats-color mb-2">100%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Online Learning</div>
                  </div>
                </div>
                <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-gradient-card-bg rounded-lg p-4 md:p-6 shadow-card hover:shadow-hover transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold stats-color mb-2">24/7</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <CoursesSection />
          <IslamicLearningSection />
          <ContactSection onEnrollClick={() => setEnrollDialogOpen(true)} />
        </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-hero-bg text-primary-foreground py-12 relative overflow-hidden">
        {/* Footer Background Elements */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-secondary rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-accent rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="animate-fade-in-up">
              <InstituteBrand variant="footer" className="mb-4" />
              <p className="text-black/80 text-xs md:text-sm">
                Spreading the light of Quran and Sunnah through accessible online Islamic education.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4 gradient-text text-sm md:text-base">Courses</h4>
              <ul className="space-y-2 text-xs md:text-sm text-black/80">
                <li className="hover:text-black transition-colors duration-300 cursor-pointer hover:scale-105 transition-transform duration-300">Tajweed & Recitation</li>
                <li className="hover:text-black transition-colors duration-300 cursor-pointer hover:scale-105 transition-transform duration-300">Quran Translation</li>
                <li className="hover:text-black transition-colors duration-300 cursor-pointer hover:scale-105 transition-transform duration-300">Tafseer Studies</li>
                <li className="hover:text-black transition-colors duration-300 cursor-pointer hover:scale-105 transition-transform duration-300">Hifz Program</li>
                <li className="hover:text-black transition-colors duration-300 cursor-pointer hover:scale-105 transition-transform duration-300">Islamic Studies</li>

              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 gradient-text text-sm md:text-base">Contact</h4>
              <ul className="space-y-2 text-xs md:text-sm text-black/80">
                <li>
                  <a
                    href={PHONE_URL}
                    className="flex items-center space-x-2 hover:text-black transition-colors duration-300 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-base md:text-lg">📱</span>
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={EMAIL_URL}
                    className="flex items-center space-x-2 hover:text-black transition-colors duration-300 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-base md:text-lg">📧</span>
                    <span className="font-medium">{EMAIL}</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2 hover:text-black transition-colors duration-300 hover:scale-105 transition-transform duration-300">
                  <span className="text-base md:text-lg">🌍</span>
                  <span>Online Worldwide</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-black transition-colors duration-300 hover:scale-105 transition-transform duration-300">
                  <span className="text-base md:text-lg">🕰️</span>
                  <span>Flexible Timings</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4 gradient-text text-sm md:text-base">Connect With Us</h4>
              <p className="text-xs text-black/70 mb-3">WhatsApp, Zoom, Meet, Telegram, Skype & more</p>
              <PlatformLinks size="sm" />
            </div>
            

          </div>
          <Separator className="my-6 md:my-8 bg-primary-foreground/20" />
          <div className="text-center text-xs md:text-sm text-black/60 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-black/80">&copy; {new Date().getFullYear()} {INSTITUTE_NAME}. All rights reserved.</p>
            <p className="mt-2 italic text-black/90 text-xs md:text-sm">"The best among you are those who learn the Quran and teach it." - Prophet Muhammad ﷺ</p>
            <p className="mt-2 text-black/90 text-xs md:text-sm">
              <span className="font-medium gradient-text">Contact:</span>{" "}
              <a href={EMAIL_URL} className="underline hover:text-primary">{EMAIL}</a>
              {" · "}
              <a href={PHONE_URL} className="underline hover:text-primary">{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;