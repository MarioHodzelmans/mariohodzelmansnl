"use client";

import {
  CommonGravityContainer,
  CommonGravityObject,
} from "@/components/animations/CommonGravitySection";

const ITEMS = [
  "AI Strategy",
  "Automation",
  "Knowledge Systems",
  "AI Agents",
  "Digital Transformation",
  "Systems Design",
  "Decision Support",
  "Business Intelligence",
  "E-Commerce",
  "Innovation",
  "Digital Operations",
  "Growth Strategy",
  "Process Automation",
  "Intelligent Systems",
];

export default function CommonGravityPermanentObjects() {
  return (
    <CommonGravityContainer>
      <div className="mxd-promo__objects object-container">
        {ITEMS.map((item, index) => (
          <CommonGravityObject key={item} index={index}>
            <div className="object object-permanent">
              <p>{item}</p>
            </div>
          </CommonGravityObject>
        ))}
      </div>
    </CommonGravityContainer>
  );
}
