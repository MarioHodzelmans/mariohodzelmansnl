import Link from 'next/link'

import styles from './ComposerRenderer.module.css'

type TextLink = {
  href?: string | null
  label?: string | null
}

type ComposerBlock = {
  blockType?: string
  id?: null | string
} & Record<string, unknown>

type ComposerPageData = {
  layout?: ComposerBlock[] | null
  title?: string | null
}

function paragraphs(value: unknown): string[] {
  return typeof value === 'string'
    ? value
        .split(/\n{2,}/)
        .map((item) => item.trim())
        .filter(Boolean)
    : []
}

function text(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function records(value: unknown): Record<string, unknown>[] {
  return Array.isArray(value)
    ? value.filter((item): item is Record<string, unknown> => {
        return item != null && typeof item === 'object' && !Array.isArray(item)
      })
    : []
}

function link(value: unknown): TextLink {
  return value != null && typeof value === 'object' && !Array.isArray(value)
    ? (value as TextLink)
    : {}
}

function renderButton(item: TextLink, key?: string) {
  if (!item.href || !item.label) return null

  return (
    <Link className="btn btn-line btn-line-default" href={item.href} key={key}>
      <span className="btn-caption">{item.label}</span>
    </Link>
  )
}

function BlockHeading({ block }: { block: ComposerBlock }) {
  return (
    <div>
      {text(block.eyebrow) ? <p className={styles.eyebrow}>{text(block.eyebrow)}</p> : null}
      <h2 className={styles.heading}>{text(block.title)}</h2>
    </div>
  )
}

function Hero({ block }: { block: ComposerBlock }) {
  const actions = records(block.actions)

  return (
    <section className={styles.hero}>
      <div className="mxd-container grid-l-container">
        {text(block.eyebrow) ? <p className={styles.eyebrow}>{text(block.eyebrow)}</p> : null}
        <h1 className={styles.display}>
          {text(block.heading)
            .split('\n')
            .map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                <br />
              </span>
            ))}
        </h1>
        {text(block.intro) ? <p className={styles.lead}>{text(block.intro)}</p> : null}
        {actions.length ? (
          <div className={styles.actions}>
            {actions.map((action, index) =>
              renderButton(
                {
                  href: text(action.href),
                  label: text(action.label),
                },
                `${text(action.href)}-${index}`,
              ),
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function FeaturedArticle({ block }: { block: ComposerBlock }) {
  return (
    <section className={`mxd-section bg-color-base ${styles.section}`}>
      <div className="mxd-container grid-l-container">
        <div className={styles.split}>
          <BlockHeading block={{ ...block, title: text(block.title) }} />
          <div className={styles.body}>
            {paragraphs(block.body).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {renderButton(link(block.link))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SplitText({ block }: { block: ComposerBlock }) {
  return (
    <section className={`mxd-section ${styles.section}`}>
      <div className="mxd-container grid-l-container">
        <div className={styles.split}>
          <BlockHeading block={block} />
          <div>
            <div className={styles.body}>
              {paragraphs(block.body).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className={styles.tags}>
              {records(block.tags).map((tag) => (
                <li key={text(tag.label)}>{text(tag.label)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CardsGrid({ block }: { block: ComposerBlock }) {
  return (
    <section className={`mxd-section bg-color-base ${styles.section}`}>
      <div className="mxd-container grid-l-container">
        <BlockHeading block={block} />
        <div className={styles.cards}>
          {records(block.cards).map((card) => (
            <article className={styles.card} key={text(card.title)}>
              <h3>{text(card.title)}</h3>
              {text(card.description) ? <p>{text(card.description)}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NumberedList({ block }: { block: ComposerBlock }) {
  return (
    <section className={`mxd-section ${styles.section}`}>
      <div className="mxd-container grid-l-container">
        <BlockHeading block={block} />
        <div className={styles.list}>
          {records(block.items).map((item, index) => (
            <article className={styles.listItem} key={`${text(item.title)}-${index}`}>
              <span>{text(item.number) || String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{text(item.title)}</h3>
                {text(item.description) ? <p>{text(item.description)}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA({ block }: { block: ComposerBlock }) {
  return (
    <section className={`mxd-section ${styles.section}`}>
      <div className="mxd-container grid-l-container">
        <div className={styles.cta}>
          <div>
            <h2>{text(block.title)}</h2>
            {text(block.body) ? <p>{text(block.body)}</p> : null}
          </div>
          {renderButton(link(block.link))}
        </div>
      </div>
    </section>
  )
}

function renderBlock(block: ComposerBlock, index: number) {
  const key = block.id || `${block.blockType}-${index}`

  switch (block.blockType) {
    case 'hero':
      return <Hero block={block} key={key} />
    case 'featuredArticle':
      return <FeaturedArticle block={block} key={key} />
    case 'splitText':
      return <SplitText block={block} key={key} />
    case 'cardsGrid':
      return <CardsGrid block={block} key={key} />
    case 'numberedList':
      return <NumberedList block={block} key={key} />
    case 'cta':
      return <CTA block={block} key={key} />
    default:
      return null
  }
}

export default function ComposerRenderer({ page }: { page: ComposerPageData }) {
  return <main className={styles.page}>{page.layout?.map(renderBlock)}</main>
}
