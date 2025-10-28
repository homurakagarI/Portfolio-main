import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<{ src: string; alt: string } | null>(null)
  const [showingCertPopup, setShowingCertPopup] = useState(false)

  function handleViewCert(cert: { src: string; alt: string }) {
    setSelectedCert(cert)
    setShowingCertPopup(true)
  }
  function handleCloseCert() {
    setShowingCertPopup(false)
    setTimeout(() => setSelectedCert(null), 200)
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 w-full px-2 sm:px-4 md:px-8">
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Certifications
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto">
          <div className="group rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-card shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
            {/* Image container with overlay */}
            <div className="relative overflow-hidden h-48">
              <img
                src="83adbc48-2f9f-41de-bac2-52eaa0b260b2.jpg"
                alt="Best In Reaserch"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2">Best in Research Mobile Category Award</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Synergy · 2025</p>
              
              <Button 
                onClick={() => handleViewCert({
                  src: "83adbc48-2f9f-41de-bac2-52eaa0b260b2.jpg",
                  alt: "Best In Research Mobile Category Award"
                })}
                className="mt-auto w-full transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">View Certificate</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>

          <div className="group rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-card shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
            {/* Image container with overlay */}
            <div className="relative overflow-hidden h-48">
              <img
                src="Cert.jpg"
                alt="Professional Certification"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2">Professional Certification</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">Certification Authority · 2024</p>
              
              <Button 
                onClick={() => handleViewCert({
                  src: "Cert.jpg",
                  alt: "Professional Certification"
                })}
                className="mt-auto w-full transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">View Certificate</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all`}>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className={`bg-background rounded-lg shadow-lg w-full max-w-xl mx-auto p-2 sm:p-4 flex flex-col items-center gap-2 sm:gap-4
              ${showingCertPopup ? "animate-in fade-in zoom-in-95 duration-200" : "animate-out fade-out zoom-out-95 duration-200"}
            `}>
              <Button variant="secondary" onClick={handleCloseCert} className="self-start mb-1">
                Back
              </Button>
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="max-h-[50vh] sm:max-h-[60vh] max-w-[85vw] rounded-lg border bg-background object-contain"
              />
              <div className="mt-2 text-sm sm:text-base font-semibold text-background bg-foreground/80 px-3 py-1.5 rounded">
                {selectedCert.alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}




