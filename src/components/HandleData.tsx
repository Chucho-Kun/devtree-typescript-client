import { type UserHandler, type SocialNetwork } from '../types'

type HandleDataProps = {
    data: UserHandler
}
export default function HandleData({ data }: HandleDataProps) {

    const links: SocialNetwork[] = JSON.parse(data.links).filter( (link: SocialNetwork) => link.enabled)
    console.log(links);

  return (
    <div className="space-y-6"> 
        <p className="text-3xl text-center bg-blue-600 p-2 font-black">{ data.handle }</p>
        {data.imagen && <img src={ data.imagen } className="max-w-[250px] mx-auto" />}
        <p className="text-lg text-center font-bold">{ data.description }</p>
        <div
            className="mt-20 flex flex-col gap-6"
        >{ links.length ? 
            links.map( link => (
                <a
                    key={ link.name }
                    className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
                    href={ link.url }
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={`/social/icon_${link.name}.svg`} alt="imagen red social" className="w-12" />
                    <p className="text-black capitalize font-black text-lg">Visita mi: { link.name }</p>
                </a>
            ))
            : <p className="text-center bg-grey-400">No hay enlaces en este perfil</p> }
        </div>
    </div>
  )
}
