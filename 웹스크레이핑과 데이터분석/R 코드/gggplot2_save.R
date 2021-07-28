library(ggplot2)

library(car)

p1 <- ggplot(Salaries, aes(x=rank)) + 
  geom_bar(fill="steelblue")


p2 <- ggplot(Salaries, aes(x=salary)) +
  geom_histogram(fill="maroon")

p3 <- ggplot(Salaries, aes(x=yrs.since.phd, y=salary)) +
  geom_point(color="orange")

p4 <- ggplot(Salaries, aes(x=rank, y=salary)) +
  geom_boxplot(fill="mistyrose")

install.packages("gridExtra")
library(gridExtra)
grid.arrange(p1, p2, p3, p4, nrow=2, ncol=2)

myggplot <- grid.arrange(p1, p2, p3, p4, nrow=2, ncol=2)

ggsave(file="myplot.png", plot=myggplot,
       width = 7.0, height = 5.5)