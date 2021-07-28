library(ggplot2)

head(mtcars)
ggplot(data=mtcars, aes(x=wt, y=mpg)) +
  geom_point(shape=21, color="blue", bg="skyblue", size=2, stroke=1.5) +
  geom_smooth(method = "lm", color="red", linetype=2, size=1.1) +
  geom_text(label = rownames(mtcars), hjust=0, vjust=0, nudge_y = 0.7, size=2) +
  labs(title = "Fuel Consumption vs. Weight",
       x = "Weight(1,000 lbs)",
       y = "Fuel Consumption(miles per gallon)")

library(car)
str(Salaries)

ggplot(Salaries, aes(x=rank, y=salary)) +
  geom_boxplot(fill = "salmon", color="dimgray", notch = TRUE)+
  geom_point(position = "jitter", color="royalblue", alpha=0.5)+
  geom_rug(sides="l", color="dimgray")

library(lattice)
head(singer)
ggplot(singer, aes(x=voice.part, y=height)) +
  geom_violin(fill = "honeydew2") +
  geom_boxplot(fill = "lightgreen", width=0.2)
  

#Options to change graph
?geom_point
?par
colors()
?geom_smooth
rownames(mtcars)
?geom_text
?geom_boxplot
?geom_rug

#notch = 95% 
#position = jitter