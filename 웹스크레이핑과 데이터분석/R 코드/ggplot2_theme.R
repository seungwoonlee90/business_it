library(ggplot2)

library(car)
str(Salaries)

ggplot(Salaries, aes(x=yrs.since.phd, y=salary,
                     color=rank, shape=rank)) +
  geom_point() +
  facet_grid(. ~ sex) +
  theme_light()


#customizing

?theme_gray

theme()

ggplot(Salaries, aes(x=rank, y=salary, fill=sex)) +
  geom_boxplot() +
  labs(title = "Salary by rank and sex",
       x="Rank", y="Salary") +
  theme(plot.title = element_text(face="bold.italic", size=15, color="brown"),
        axis.title = element_text(face="bold.italic", size=10, color="tomato"),
        axis.text = element_text(face="bold", size=9, color="royalblue"))
