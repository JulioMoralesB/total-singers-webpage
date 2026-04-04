import React from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'

export const Home: React.FC = () => {
  // Featured show
  const featuredShow = {
    title: 'Armonías Neon - Concierto Especial',
    date: 'Octubre 15, 2025',
    venue: 'Centro Cultural',
  }

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
          <img
            alt="Total Singers Ensemble"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXzMOrp8_BtnK9klgCz97_7DJWw421kz-U6cXKv1gcSNfS_KkO8HKP33ezkIzpuJCOQUwQeKozZ34if3A-jVqrk3jwt73Y4XJTS9w2xxwIRHocEeq4lwNmGpA0EdZHXPsO7abXlogu--pU3eSbedARblBssBDpWWP0gb-nJYIedoqImCHOW_bf-LIIGvbw96wFykaDFiOpOPtEOUPjLZdjZRxLNiZZ0xHhYgOWbWCApMoDOTOweVcRnEHSsNUH0ddK5N01vyhZNPw"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="flex flex-col gap-6 max-w-4xl">
            <Badge color="primary">Próxima Generación Pop Coral</Badge>
            <h1 className="title-hero text-on-surface">
              HACEMOS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary italic">
                QUE LA VOZ SUENE.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
              Total Singers es un conjunto vocal de alto rendimiento que combina armonías sofisticadas con la energía del pop moderno.
            </p>
            <div className="mt-8 glass-card p-6 md:p-8 rounded-lg max-w-md flex flex-col md:flex-row items-center gap-6 group hover:border-primary/40 transition-colors">
              <div className="flex-1">
                <p className="label-uppercase text-secondary mb-1">Próxima Presentación</p>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{featuredShow.title}</h3>
                <p className="text-on-surface-variant text-sm mt-1">{featuredShow.venue} • {featuredShow.date}</p>
              </div>
              <Button variant="primary" className="group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="label-uppercase text-[10px]">Desplázate</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* The Sound Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
            <div className="md:col-span-7">
              <h2 className="heading-secondary text-on-surface mb-8">
                El Sonido de la <br />
                <span className="text-secondary">Sincronización.</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg font-body">
                <p>
                  Olvida todo lo que sabías sobre coros tradicionales. Total Singers se construye sobre la base de la producción musical actual: beatboxing, capas complejas e identidad vocal individual.
                </p>
                <p>
                  Nuestro conjunto no solo canta canciones; las reinterpreta a través de una lente de energía eléctrica y técnica vocal moderna.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
                <Card className="relative bg-surface-container-high p-8 border border-outline-variant/20">
                  <div className="flex text-primary text-5xl mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      equalizer
                    </span>
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-2 text-on-surface">Enfoque Pop</h4>
                  <p className="text-on-surface-variant text-sm">
                    Desde éxitos de las listas hasta pop indie underground, seleccionamos música que resuena con el ritmo de nuestra generación.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Hits Showcase - Bento Grid */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="label-uppercase text-tertiary">Discografía</span>
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter mt-2 text-on-surface">
                Éxitos Recientes
              </h2>
            </div>
            <a
              href="/setlist"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-primary/20 hidden md:flex"
            >
              Ver Todos
              <span className="material-symbols-outlined">east</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg aspect-[16/9]">
              <img
                alt="Studio Recording"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt_Zgx_EEozl6VS9jM0HkLkjk6IO5c0BR94pyJq9M3pEtWNIcK_uPSNd3yoVPVNw_O4a0GdZ3uOK3n6tuEI-eH2WaTPSfkFauKGRIEag-TX41aTZKW-6z2BtTRydSoZNlUoxF3-zeGqU6FGLIEwWT6RFemowUcMoxEHYwp4BjE8glmT-SHhy40Utm9bWcgEBi7gMYdbbn_Ph-W6lUMnlFHrFOqyDOFTkCGKtBvD1bjlVPVxBdZH_ydRl-883kSH-KKqzNwSC-TTzg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <Badge color="secondary" className="mb-3 inline-block">
                    Lanzamiento Nuevo
                  </Badge>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">Levitating (Remix Total)</h3>
                  <p className="text-secondary-fixed-dim font-medium">Original de Dua Lipa</p>
                </div>
                <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-on-primary-fixed hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </button>
              </div>
            </div>

            {/* Secondary Card */}
            <div className="relative group overflow-hidden rounded-lg bg-surface-container-highest p-8 flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">Blinding Lights</h3>
                <p className="text-on-surface-variant">Cover de The Weeknd</p>
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm font-label uppercase tracking-widest text-on-surface-variant/60">
                  <span>03:20</span>
                  <div className="flex-1 h-px bg-outline-variant/30" />
                  <span>A Capella</span>
                </div>
                <Button variant="secondary" size="md">
                  Escuchar Ahora
                </Button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">music_note</span>
              </div>
            </div>

            {/* Tertiary Card */}
            <div className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-surface-container-highest to-surface-container-low p-8 flex flex-col justify-center items-center text-center gap-4 border border-outline-variant/10 md:col-span-2">
              <div className="w-20 h-20 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-2">
                <span className="material-symbols-outlined text-4xl">mic</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">Únete al Conjunto</h3>
              <p className="text-on-surface-variant text-sm">
                Actualmente realizamos audiciones para nuestra Gira de Invierno. Muéstranos tu voz.
              </p>
              <a href="#" className="text-tertiary font-bold mt-2 hover:text-tertiary-dim transition-colors">
                Aplicar Ahora
              </a>
            </div>

            {/* Lyric Overlay Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-lg aspect-[21/9]">
              <img
                alt="Lyric Background"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB00UJJV_DA4VJwo_EL8hp2r0fan6yG0mFA0xPlC3Bwg52N3umwYngjJ2Kspidn9-ZpNlLn9tAP97-aJtemScvaESORmgnrdgTpQ4Xv0I8nkj4lTKTjoIglr-AhRD8xWAFLUErWhEzkOo6pOsjAKX7KEhkttMPw578L2qrzzUh-ALSLliPMXFqBVGaVCeK05mXztZINeLwvdvSj8UqeCXEVS4edslGh2TmSAL5PKA9qwjpVK-1BBsfGjFAam5OvD0EznrDOkM_o9Ng"
              />
              <div className="absolute inset-0 flex items-center px-12">
                <h4 className="font-headline text-4xl md:text-5xl font-black italic text-primary leading-none opacity-80 group-hover:opacity-100 transition-opacity">
                  "CANTAMOS LAS CANCIONES <br /> QUE TIENES EN REPEAT."
                </h4>
              </div>
              <div className="absolute bottom-8 right-8 text-on-surface-variant label-uppercase text-xs">
                Manifiesto Total Singers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singers / Community Grid */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
            <div className="flex-1">
              <h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface">
                Conoce al Colectivo
              </h2>
              <p className="text-on-surface-variant text-lg mt-4 max-w-lg leading-relaxed">
                24 cantantes. 6 beatboxers. Un pulso sincronizado. Nuestros miembros son el corazón de todo lo que creamos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Singer Profile 1 */}
            <div className="group">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
                <img
                  alt="Maya"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Q9b0JC06w5FrFpIccpRLs3SHjzF3KP2XL7IroitfXOm4qDAVvxMe7Sx17ryyFcOCyT7st1ik4r_cOrqrQFToE96WQ0S_t1pQ95N6rvgwEZcXskFyxeDfEidabCb-Y1zFRu7pZpMkPrVu1W3y_gPwc-JETm3FYVqNqKWQSNOE3lwfjkbimI6nh6kAjNnZX4LHzSq9h7wzhKXGUoWo7MwiisoqE1Ko_IQGfZNtXdqz-cZqjp7jOwwLmYHv89f3KGNAiGHvUZHRuEs"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">Maya G.</h4>
              <p className="text-on-surface-variant text-sm label-uppercase">Soprano / Solista</p>
            </div>

            {/* Singer Profile 2 */}
            <div className="group mt-8 md:mt-16">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
                <img
                  alt="Leo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69g7aTRbRJY0xI8On6DpSN6_oaSHMA4Memz1lQA_4GBotRbv8FsE9SW13slr-706-ocji2q_KqKzdX9JvGHUG3WpkuJFqx8PfIDbmxOwVUJMOlJh7oQZ7MITGQ1S1pyqW3JNV8HOuqb9Njlxu57zLza1Y4070zu1LJHo-Em5dZNqi9s8ooLHkpZqO_lRrXKo14pOQhmdvtZHkfTKCYT960CCNctoKoWBsGQ0ku5zKL8gRwOAQvC6nl36Gv6afLenoOa-gYYL9udU"
                />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">Leo Vance</h4>
              <p className="text-on-surface-variant text-sm label-uppercase">Bajo / Beatbox</p>
            </div>

            {/* Singer Profile 3 */}
            <div className="group">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
                <img
                  alt="Chloe"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxvNbMyVgxXEMRsl21kDN4GW-MSja342L4yYvJAkczHFdHUI1O-v9E5SuTAYzh71kBZiC1LVHxiCZg_UJO0KVfDZQA2Twii4Aeko2RmMTCKuyqgESKpkTBRLBLLtiN2-QsAqOvp1zG8zgUiU-ypvmAO7ZCorALMNbFW8YsSQSmLFAxGQ7jRJ7-sz95cdKRpdcZZBjOIhs33Pm1AbCOHboFnkEeUomdt8RLd6-hlc__oRcDIFULXN9gE4FkE2U2-vkbJOBHCeJCAaI"
                />
                <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">Chloe S.</h4>
              <p className="text-on-surface-variant text-sm label-uppercase">Alto / Arreglista</p>
            </div>

            {/* Singer Profile 4 */}
            <div className="group mt-8 md:mt-16">
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4">
                <img
                  alt="Daniel"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoCCurOR5VaCJcStpd7bDVojXnX3Y6tzKVo47ZRrMaVfqRhbQ27E81v01rWZLOmIBcTk10gcO1EH4nFu8oIhzbzNxkdplPwbEZLO87NKbjlhyDlI-rg0AE15J75olkKAjNyeKC03GhKRnGCSsjeUUKYL9xBlUlhi_eWKRSm3wXgXBNR7N90JPnb2Av6GNef6RaoHkycVnUmGZTNCweWeiTi5k9a3qGzeY94R8ODOPkUM6D1DzetEXPJ0QmgYvXtHkTH1R8yj4_Paw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">Daniel Kim</h4>
              <p className="text-on-surface-variant text-sm label-uppercase">Tenor / Teclista</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative px-6 md:px-8">
        <div className="max-w-5xl mx-auto glass-card rounded-lg p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 leading-tight text-on-surface">
            ¿LISTO PARA <br /> <span className="text-primary">SINCRONIZARTE?</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            Ya sea que busques nuestras próximas fechas de giras o quieras unirte al conjunto, mantente conectado con el ritmo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="primary">Obtener Entradas</Button>
            <Button variant="secondary">Síguenos</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
