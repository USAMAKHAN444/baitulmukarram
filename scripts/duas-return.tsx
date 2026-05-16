  return (
    <section className="space-y-8">
      <TopicIntro topic={topic} badge="🤲 Daily Duas | روزانہ کی دعائیں">
        Short, authentic supplications for everyday situations in Arabic with English and Urdu
        translations. Ideal for learning and practice.
      </TopicIntro>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {duas.map((dua, index) => {
          const Icon = dua.icon;
          return (
            <TopicCard
              key={index}
              topic={topic}
              header={
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-lg">{index + 1}.</span>
                    </div>
                    <Badge className="bg-white/25 text-white border-0 text-xs shrink-0">
                      {dua.category}
                    </Badge>
                  </div>
                  <TopicCardTitle>
                    {dua.title} | {dua.urdu}
                  </TopicCardTitle>
                </div>
              }
            >
              <div>
                <TopicLabel topic={topic}>Arabic:</TopicLabel>
                <TopicArabicBox topic={topic}>
                  <p className="text-lg font-arabic leading-relaxed text-right text-gray-900">
                    {dua.arabic}
                  </p>
                </TopicArabicBox>
              </div>
              <TopicSeparator topic={topic} />
              <div>
                <TopicLabel topic={topic}>English:</TopicLabel>
                <p className="text-gray-800 leading-relaxed">{dua.english}</p>
              </div>
              <TopicSeparator topic={topic} />
              <div>
                <TopicLabel topic={topic}>Urdu:</TopicLabel>
                <p className="text-gray-800 leading-relaxed text-right">{dua.urduTranslation}</p>
              </div>
            </TopicCard>
          );
        })}
      </div>

      <TopicBenefits topic={topic} title="🌟 Benefits of Daily Duas">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🤲", title: "Constant Remembrance", text: "Keep Allah in your heart throughout the day" },
            { icon: "✨", title: "Spiritual Blessing", text: "Receive Allah's blessings in daily activities" },
            { icon: "❤️", title: "Peace of Mind", text: "Find tranquility and gratitude in everyday moments" },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className={cn("font-semibold mb-2", topic.accentText)}>{item.title}</h4>
              <p className="text-gray-700 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </TopicBenefits>
    </section>
  );
