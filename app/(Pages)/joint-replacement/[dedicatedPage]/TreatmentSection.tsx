import React from 'react';
import FAQ from './FAQ';

interface InfoCard {
  title: string;
  content: string;
}

interface TreatmentSectionProps {
  id: string;
  icon: string;
  title: string;
  cards: InfoCard[];
  buttonText: string;
  comingSoon?: boolean;
  faqItems?: Array<{ question: string; answer?: string }>;
}

const TreatmentSection: React.FC<TreatmentSectionProps> = ({ 
  id, 
  icon, 
  title, 
  cards, 
  buttonText, 
  comingSoon = false,
  faqItems = []
}) => {
  return (
    <section 
      id={id}
      className="w-[1324px] mt-0 mb-20 mx-auto px-[58px] py-0 max-md:w-full max-md:px-6 max-md:py-0"
    >
      <header className="flex items-center gap-[29px] mb-10 max-md:flex-col max-md:text-center max-md:gap-4">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-[100px] h-[100px] border border-solid border-[#1A4CA3]"
        />
        <h2 className="text-black text-[38px] font-semibold max-md:text-[28px] font-poppins">
          {title}
        </h2>
        {comingSoon && (
          <span className="text-[#5AB8D0] text-[28px] font-medium ml-auto">
            (Coming Soon)
          </span>
        )}
      </header>
      
      <div className="flex flex-col gap-[26px]">
        <div className="flex gap-6 max-md:flex-col">
          {cards.slice(0, 2).map((card, index) => (
            <article key={index} className="flex-1 shadow-[0_158px_44px_0_rgba(0,0,0,0.00),0_101px_41px_0_rgba(0,0,0,0.01),0_57px_34px_0_rgba(0,0,0,0.05),0_25px_25px_0_rgba(0,0,0,0.09),0_6px_14px_0_rgba(0,0,0,0.10)] bg-white px-[26px] py-7 rounded-xl">
              <h3 className="text-[#1A4CA3] text-[28px] font-medium mb-4 max-sm:text-2xl font-poppins">
                {card.title}
              </h3>
              <div 
                className="text-[#4A4A4A] text-2xl font-montserrat font-medium leading-[38px] max-sm:text-lg max-sm:leading-7"
                dangerouslySetInnerHTML={{ __html: card.content.replace(/\n/g, '<br />') }}
              />
            </article>
          ))}
        </div>
        
        {cards.length > 2 && (
          <div className="flex gap-6 max-md:flex-col">
            {cards.slice(2, 4).map((card, index) => (
              <article key={index + 2} className="flex-1 shadow-[0_158px_44px_0_rgba(0,0,0,0.00),0_101px_41px_0_rgba(0,0,0,0.01),0_57px_34px_0_rgba(0,0,0,0.05),0_25px_25px_0_rgba(0,0,0,0.09),0_6px_14px_0_rgba(0,0,0,0.10)] bg-white px-[26px] py-7 rounded-xl">
                <h3 className="text-[#1A4CA3] text-[28px] font-medium mb-4 max-sm:text-2xl font-poppins">
                  {card.title}
                </h3>
                <div 
                  className="text-[#4A4A4A] text-2xl font-montserrat font-medium leading-[38px] max-sm:text-lg max-sm:leading-7"
                  dangerouslySetInnerHTML={{ __html: card.content.replace(/\n/g, '<br />') }}
                />
              </article>
            ))}
          </div>
        )}
        
        {cards.length > 4 && (
          <article className="w-full shadow-[0_158px_44px_0_rgba(0,0,0,0.00),0_101px_41px_0_rgba(0,0,0,0.01),0_57px_34px_0_rgba(0,0,0,0.05),0_25px_25px_0_rgba(0,0,0,0.09),0_6px_14px_0_rgba(0,0,0,0.10)] bg-white px-[26px] py-7 rounded-xl">
            <h3 className="text-[#1A4CA3] text-[28px] font-medium mb-4 max-sm:text-2xl font-poppins">
              {cards[4].title}
            </h3>
            <div 
              className="text-[#4A4A4A] text-2xl font-medium leading-[38px] max-sm:text-lg max-sm:leading-7 font-montserrat"
              dangerouslySetInnerHTML={{ __html: cards[4].content.replace(/\n/g, '<br />') }}
            />
          </article>
        )}
        
        {!comingSoon && (
          <button className="text-white text-[22px] font-montserrat font-semibold cursor-pointer w-fit bg-[#1A4CA3] mt-9 mb-0 mx-auto px-7 py-3 rounded-lg max-sm:text-lg max-sm:px-6 max-sm:py-4 hover:bg-[#1A4CA3]/90 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
      
      {faqItems.length > 0 && <FAQ items={faqItems} />}
    </section>
  );
};

export default TreatmentSection;