import WelcomeBanner from "./Banner";
import InfoCard from "./InfoCard";

const Content = [
    {
        title: "Documentation",
        content: "Comprehensive and well-organized documentation that provides users with clear instructions and valuable information.",
        link: () => <a href="#">Documentation</a>
    },
    {
        title: "Support",
        content: "Empower your customer support team with this practical video tutorial, designed to enhance their skills and knowledge.",
        link: () => <a href="#">Support</a>
    },
]

export default function Welcome() {
    return (
        <>
            <div className="container text-left">
                <WelcomeBanner />
                <div className="row">
                    {
                        Content.map(({ title, content, link: Link }) => {
                            return <InfoCard
                                key={title}
                                title={title}
                            >
                                {content}
                                <Link />
                            </InfoCard>

                        })
                    }
                </div>
            </div>
        </>
    )

}