import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import BlurSection from '@/components/animations/BlurSection'
import CommonLoadAnimation, { CommonLoadFade, CommonLoadItem } from '@/components/animations/CommonLoadAnimation'
import CommonAnimatedText from '@/components/animations/CommonAnimatedText'
import TextScramble from '@/components/animations/TextScramble'
import MxdImgAnim from '@/components/animations/MxdImgAnim'
import { CommonCardBatchAnimated } from '@/components/animations/CommonScrollAnimated'
import AutoplayLoopVideo from '@/components/media/AutoplayLoopVideo'
import { getCases } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'Cases | Mario Hodzelmans',
  description: 'Selected case studies across AI, automation, e-commerce and intelligent business systems.',
}

export default async function CasesPage() {
  const cases = await getCases(50)

  return (
    <CommonLoadAnimation>
      <div className="mxd-page-content inner-page-content">
        <BlurSection className="mxd-section">
          <div className="mxd-container grid-l-container">
            <div className="mxd-block loading-wrap">
              <div className="inner-headline margin-bottom-title-medium">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item">
                      <CommonLoadFade index={0}>
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav">
                            <span><Link href="/">Home</Link></span>
                            <span className="current-item">Cases</span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                    <div className="col-12">
                      <div className="inner-headline__content has-medium-title">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-xl-9 mxd-grid-item">
                              <div className="inner-headline__title">
                                <CommonAnimatedText as="h1" className="medium loading-split" animation="splitLinesLoad">
                                  Where strategy <span>becomes systems</span>
                                </CommonAnimatedText>
                              </div>
                            </div>
                            <div className="col-12 col-xl-3 mxd-grid-item">
                              <div className="inner-headline__tags align-end-desktop tags-medium-title">
                                {['AI Strategy', 'Automation', 'E-Commerce', 'Intelligent Systems'].map((label, index) => (
                                  <CommonLoadItem key={label} index={index}>
                                    <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">{label}</TextScramble>
                                  </CommonLoadItem>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurSection>

        <BlurSection className="mxd-section padding-bottom-projects">
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <CommonLoadFade index={0}>
                <div className="mxd-projects-grid loading-fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0 mxd-projects-grid__gallery">
                      {cases.map((item, index) => (
                        <CommonCardBatchAnimated key={item.slug} className={`col-12 col-md-6 col-xl-${index % 2 === 0 ? '4' : '7'} mxd-project-item animate-card-2${index % 2 === 0 ? ' mxd-project-item-s mxd-project-item-sticky' : ''}`} as="div" columns={2}>
                          <Link className="mxd-project-item__media active-cursor-permanent" data-cursor-text="View Case" href={`/cases/${item.slug}`}>
                            {index % 2 === 0 ? (
                              <MxdImgAnim
                                main={<Image className="centered-y" alt={item.title} src={item.featuredImage} width={1280} height={853} />}
                                absolutes={[]}
                              />
                            ) : (
                              <>
                                <Image alt={item.title} src={item.featuredImage} width={1500} height={1000} />
                                <div className="mxd-cover mxd-cover-06" />
                                <div className="mxd-project-item__videowrap">
                                  <AutoplayLoopVideo poster="video/640x360_stone-geometry-banner.webp" sources={[{ type: 'video/mp4', src: 'video/640x360_stone-geometry.mp4' }, { type: 'video/webm', src: 'video/640x360_stone-geometry.webm' }]} />
                                </div>
                              </>
                            )}
                          </Link>
                          <div className="mxd-project-item__caption">
                            <div className="mxd-project-item__name">
                              <Link className="project-name-s" href={`/cases/${item.slug}`}>{item.title}</Link>
                            </div>
                            <p className="t-medium">{item.excerpt}</p>
                            <div className="mxd-project-item__tags">
                              {[item.category, ...item.services].filter(Boolean).slice(0, 3).map((tag) => (
                                <TextScramble key={tag} className="tag tag-s tag-medium mxd-scramble">{tag}</TextScramble>
                              ))}
                            </div>
                          </div>
                        </CommonCardBatchAnimated>
                      ))}
                    </div>
                  </div>
                </div>
              </CommonLoadFade>
            </div>
          </div>
        </BlurSection>
      </div>
    </CommonLoadAnimation>
  )
}
