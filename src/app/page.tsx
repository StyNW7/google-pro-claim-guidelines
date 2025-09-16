"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Star,
  Shield,
  Zap,
  Brain,
  Code,
  ImageIcon,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  Rocket,
  Award,
  Users,
} from "lucide-react"

export default function GoogleStudentAmbassador() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [completedAllSteps, setCompletedAllSteps] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    if (currentStep === steps.length - 1) {
      setShowConfetti(true)
      setCompletedAllSteps(true)
      
      // Hide confetti after animation completes
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [currentStep])

  const steps = [
    {
      title: "Persiapan Akun Mahasiswa",
      description: "Pastikan Anda memiliki email mahasiswa yang valid dan aktif dari institusi pendidikan resmi",
      image: "/student-email-verification-screen.jpg",
      details: [
        "Email harus berakhiran .edu atau domain universitas",
        "Akun email harus aktif dan dapat diakses",
        "Siapkan dokumen pendukung status mahasiswa",
      ],
    },
    {
      title: "Kunjungi Google AI Studio",
      description: "Buka halaman resmi Google AI Studio dan jelajahi antarmuka yang tersedia",
      image: "/google-ai-studio-homepage-interface.jpg",
      details: [
        "Pastikan koneksi internet stabil",
        "Gunakan browser terbaru (Chrome/Firefox/Safari)",
        "Aktifkan JavaScript di browser Anda",
      ],
    },
    {
      title: "Pilih Sign Up",
      description: "Klik tombol 'Get Started' atau 'Sign Up' untuk memulai proses pendaftaran",
      image: "/google-ai-studio-sign-up-button-highlighted.jpg",
      details: [
        "Cari tombol pendaftaran di halaman utama",
        "Pilih opsi 'Student Account' jika tersedia",
        "Siapkan informasi pribadi yang diperlukan",
      ],
    },
    {
      title: "Verifikasi Status Mahasiswa",
      description: "Upload dokumen yang membuktikan status mahasiswa Anda seperti KTM atau surat keterangan",
      image: "/student-verification-document-upload-interface.jpg",
      details: [
        "Upload KTM (Kartu Tanda Mahasiswa) yang masih berlaku",
        "Atau surat keterangan aktif kuliah dari kampus",
        "Pastikan dokumen jelas dan dapat dibaca",
      ],
    },
    {
      title: "Aktivasi Akun",
      description: "Tunggu email konfirmasi dan ikuti instruksi untuk mengaktifkan akun Anda",
      image: "/email-confirmation-activation-screen.jpg",
      details: [
        "Cek inbox dan folder spam email Anda",
        "Klik link aktivasi dalam email konfirmasi",
        "Proses verifikasi biasanya 1-3 hari kerja",
      ],
    },
    {
      title: "Mulai Menggunakan",
      description: "Selamat! Anda sudah bisa menggunakan Google AI Pro gratis selama 1 tahun penuh",
      image: "/google-ai-pro-dashboard-welcome-screen.jpg",
      details: [
        "Akses semua fitur premium Google AI",
        "Nikmati kredit gratis untuk eksperimen",
        "Bergabung dengan komunitas developer AI",
      ],
    },
  ]

  const aiProducts = [
    {
      name: "Tier Gemini Rising Star",
      description: "Langkah awal untuk menjadi Google Student Ambassador dengan berbagai merchandise eksklusif",
      icon: <img src="/gsa-assets/Bintang_.png" alt="Rising Star" className="w-12 h-12" />,
      features: ["Merchandise Eksklusif dari Google: Tote Bag, Laptop Sleeve, Cap, Card Holder, Keychain, Sticker Sets"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tier Gemini Achiever",
      description: "Tingkatkan kemampuan dan dapatkan merchandise eksklusif tambahan",
      icon: <img src="/gsa-assets/Roket.png" alt="Achiever" className="w-12 h-12" />,
      features: ["Seluruh hadiah di Tier Gemini Rising Star", "Merchandise Eksklusif dari Google: Backpack & Varsity Jacket"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Tier Gemini Trailblazer",
      description: "Tier tertinggi dengan berbagai keuntungan eksklusif",
      icon: <img src="/gsa-assets/Dino.png" alt="Trailblazer" className="w-12 h-12" />,
      features: ["Seluruh hadiah di Tier Gemini Rising Star dan Gemini Achiever", "Earbuds/TWS", "Plakat Pencapaian Pelatihan"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Google Student Ambassador",
      description: "Keuntungan menjadi bagian dari program Google Student Ambassador",
      icon: <img src="/gsa-assets/Full border gsa.png" alt="GSA" className="w-12 h-12" />,
      features: ["Welcome Kit: Merchandise Eksklusif dari Google: Shirt, Tumbler, Pouch, Notebook, Pen, Lanyard, Pin"],
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Confetti effect when all steps completed */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: i % 5 === 0 ? '#1a73e8' : i % 5 === 1 ? '#34a853' : i % 5 === 2 ? '#fbbc04' : i % 5 === 3 ? '#ea4335' : '#4285f4',
                borderRadius: '50%',
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 100 ? "bg-gradient-glass shadow-2xl border-b border-white/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/gsa-assets/google-logo.png" alt="Google Logo" className="h-8 mr-3" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Google Student Ambassador
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Beranda", "Panduan", "Produk AI", "Kontak"].map((item, index) => {
                const sections = ["hero", "steps", "products", "footer"]
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sections[index])}
                    className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gradient-glass hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-6 bg-gradient-glass rounded-2xl shadow-2xl border border-white/20 animate-fade-in-up">
              <div className="flex flex-col space-y-4">
                {["Beranda", "Panduan", "Produk AI", "Kontak"].map((item, index) => {
                  const sections = ["hero", "steps", "products", "footer"]
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(sections[index])}
                      className="text-left px-6 py-3 text-foreground/80 hover:text-primary hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          
          {/* GSA Assets as decorative elements */}
          <img 
            src="/gsa-assets/Roket.png" 
            alt="Rocket" 
            className="gsa-asset-float absolute w-16 h-16 top-20 right-[15%]" 
            style={{ animationDelay: "0.5s" }}
          />
          <img 
            src="/gsa-assets/Bintang_.png" 
            alt="Star" 
            className="gsa-asset-float absolute w-12 h-12 bottom-32 left-[20%]" 
            style={{ animationDelay: "1.2s" }}
          />
          <img 
            src="/gsa-assets/Pen.png" 
            alt="Pen" 
            className="gsa-asset-float absolute w-14 h-14 top-40 left-[10%]" 
            style={{ animationDelay: "0.8s" }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge className="mb-8 bg-primary text-primary-foreground hover:shadow-lg hover-lift px-6 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />🎓 Program Mahasiswa
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 text-balance leading-tight">
              Buka Potensimu dengan{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Google Student Ambassador
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
              Kami mengajak mahasiswa/i menjadi duta inovasi dan teknologi di kampus masing-masing, dengan berfokus pada alat-alat Google AI. Setiap kampus dapat memiliki beberapa Google Student Ambassador.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-2xl hover-lift px-10 py-6 text-lg font-semibold rounded-2xl animate-pulse-glow"
                onClick={() => scrollToSection("steps")}
              >
                <Rocket className="mr-3 w-6 h-6" />
                Daftar Sekarang
                <ChevronRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover-lift px-10 py-6 text-lg font-semibold rounded-2xl bg-gradient-glass"
                asChild
              >
                <a href="https://developers.google.com/community/gdsc" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-3 w-6 h-6" />
                  Kunjungi Website Resmi
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="gsa-card bg-gradient-to-br from-blue-50 to-blue-100 hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 mb-4 text-xl">Kriteria</h3>
                      <ul className="text-blue-700 space-y-3">
                        <li className="flex items-center">
                          <Star className="w-4 h-4 mr-3 text-blue-600" />
                          Mahasiswa aktif di perguruan tinggi
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 mr-3 text-blue-600" />
                          Memiliki minat di bidang teknologi Google
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 mr-3 text-blue-600" />
                          Kemampuan komunikasi yang baik
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 mr-3 text-blue-600" />
                          Aktif dalam komunitas kampus
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gsa-card bg-gradient-to-br from-green-50 to-green-100 hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 mb-4 text-xl">Benefit</h3>
                      <ul className="text-green-700 space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
                          Merchandise eksklusif Google
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
                          Akses ke pelatihan dan sertifikasi
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
                          Jaringan dengan Google dan industri
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
                          Pengalaman kepemimpinan berharga
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Proses Pendaftaran
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">Cara Menjadi Google Student Ambassador</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ikuti langkah-langkah berikut untuk bergabung dengan program Google Student Ambassador
            </p>
          </div>

          <div className="mb-16 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-foreground">
                Langkah {currentStep + 1} dari {steps.length}
              </span>
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% Selesai
              </span>
            </div>
            <div className="relative">
              <Progress
                value={((currentStep + 1) / steps.length) * 100}
                className="h-4 bg-muted rounded-full overflow-hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index <= currentStep ? "opacity-100 animate-fade-in-up" : "opacity-40"
                }`}
              >
                <Card
                  className={`overflow-hidden hover-lift ${
                    index === currentStep ? "ring-4 ring-primary/30 shadow-2xl bg-gradient-card" : "bg-white shadow-lg"
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-10 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold mr-6 text-xl ${
                              index <= currentStep ? "bg-gradient-primary shadow-lg" : "bg-muted-foreground"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <Badge
                            variant={index <= currentStep ? "default" : "secondary"}
                            className="px-4 py-2 text-sm font-semibold"
                          >
                            Langkah {index + 1}
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{step.description}</p>

                        <div className="mb-8">
                          <h4 className="font-semibold text-foreground mb-3">Detail Langkah:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-muted-foreground">
                                <CheckCircle className="w-4 h-4 mr-3 mt-1 text-primary flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {index === currentStep && (
                          <div className="flex gap-4">
                            {index > 0 && (
                              <Button
                                variant="outline"
                                onClick={() => setCurrentStep(index - 1)}
                                className="hover-lift"
                              >
                                Sebelumnya
                              </Button>
                            )}
                            {index < steps.length - 1 && (
                              <Button
                                onClick={() => setCurrentStep(index + 1)}
                                className="bg-gradient-primary hover:shadow-lg hover-lift"
                              >
                                Selanjutnya
                                <ChevronRight className="ml-2 w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-10 lg:p-12 flex items-center justify-center">
                        <div className="relative">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            className="max-w-full h-auto rounded-2xl shadow-2xl hover-lift"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="py-20 px-6 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Keuntungan menjadi Google Student Ambassador
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">Tier dan Benefit Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Dapatkan berbagai keuntungan eksklusif dengan menjadi bagian dari program Google Student Ambassador
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {aiProducts.map((product, index) => (
              <Card key={index} className="gsa-card hover-lift hover-glow bg-gradient-card border-0 shadow-xl group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-primary text-white border-0 shadow-2xl hover-lift">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">Keuntungan Menggunakan Google AI Pro</h3>
                <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                  Dapatkan akses penuh ke ekosistem AI Google dengan berbagai keuntungan eksklusif
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Performa Tinggi</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Akses ke model AI terbaru dengan kecepatan pemrosesan optimal dan latensi rendah
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Keamanan Terjamin</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Data Anda dilindungi dengan standar keamanan enterprise Google yang terpercaya
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Fitur Premium</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Akses penuh ke semua fitur premium tanpa batasan dan dengan dukungan prioritas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="footer" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Google AI Pro Guide
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Panduan lengkap untuk mendapatkan akses Google AI Pro gratis untuk mahasiswa. Dibuat dengan ❤️ untuk
                komunitas mahasiswa Indonesia.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300 hover-lift">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300 hover-lift">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300 hover-lift">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Tautan Berguna</h4>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <a
                    href="https://aistudio.google.com"
                    className="hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-3" />
                    Google AI Studio
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/ai"
                    className="hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-3" />
                    Google AI Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://cloud.google.com/ai"
                    className="hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-3" />
                    Google Cloud AI
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com"
                    className="hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-3" />
                    Google Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Kontak & Dukungan</h4>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-primary" />
                  Email: info@googleaipro-guide.com
                </p>
                <p className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-primary" />
                  Telegram: @GoogleAIProGuide
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mt-6">
                  Website ini tidak berafiliasi resmi dengan Google. Dibuat untuk tujuan edukasi dan membantu mahasiswa
                  Indonesia mengakses teknologi AI terdepan.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-lg">
              © 2024 Google AI Pro Guide. Dibuat dengan Next.js, Tailwind CSS, dan ❤️ untuk mahasiswa Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
