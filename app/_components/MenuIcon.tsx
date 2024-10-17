import React from 'react';
import LabIcon from '../../public/svgs/lab.svg';
import CodeDotsIcon from '../../public/svgs/code-dots.svg';
import GiftIcon from '../../public/svgs/gift.svg';

const items = [
  { Icon: LabIcon, text: "출품작", color: "bg-yellow-50", iconColor: "text-yellow-400", link: "/submissions" },
  { Icon: CodeDotsIcon, text: "오픈랩", color: "bg-green-50", iconColor: "text-green-400", link: "/openlab" },
  { Icon: GiftIcon, text: "경품", color: "bg-blue-50", iconColor: "text-blue-400", link: "/prizes" },
];

const MenuSection = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex justify-between w-full max-w-md">
        {items.map((item, index) => {
          const { Icon, text, color, iconColor, link } = item;
          return (
            <a
              key={index}
              href={link}
              className="flex flex-col items-center w-1/3 cursor-pointer"
            >
              <div className={`${color} rounded-xl p-4 mb-3`}>
                <div className="w-6 h-6">
                  <Icon className={`w-full h-full ${iconColor}`} />
                </div>
              </div>
              <span className="text-sm text-center">{text}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;