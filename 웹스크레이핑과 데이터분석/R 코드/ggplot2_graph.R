library(ggplot2)

library(car)
str(Salaries)

ggplot(Salaries, aes(x=salary, fill=rank)) +
  geom_density(alpha=0.7)

ggplot(Salaries, aes(x=yrs.since.phd, y=salary, color=rank, shape=sex)) +
  geom_point()


ggplot(Salaries, aes(x=rank, fill=sex)) +
  geom_bar(position="stack")

ggplot(Salaries, aes(x=rank, fill=sex)) +
  geom_bar(position="dodge")

ggplot(Salaries, aes(x=rank, fill=sex)) +
  geom_bar(position="fill") +
  labs(y="Proportion")

presummed <- data.frame(Grade=c("A", "B", "C", "D", "F"),
                        Frequency=c(20, 45, 20, 10, 5))
presummed

#count to identity
ggplot(presummed, aes(x=Grade, y=Frequency)) +
  geom_bar(stat="identity")
#geom_col() = geom_bar(stat="identity")


library(lattice)
head(singer)

ggplot(singer, aes(x=height)) +
  geom_histogram() +
  facet_wrap(~voice.part, nrow=4)


ggplot(singer, aes(x=height, fill=voice.part)) +
  geom_density() +
  facet_grid(voice.part ~ .)


ggplot(Salaries, aes(x=yrs.since.phd, y=salary)) +
  geom_point() +
  facet_grid(sex ~ rank)
