# Joint Random Variable

We have a joint random variable $(X,Y)$ and we want to find a pair of
values

$$\begin{gather*}
    P(x,y)=\sum_{x,y\in V_{x,y}}P(e)\\
    V_{x,y}=\{e:X(e)=x, Y(e)=y\}
\end{gather*}$$

If i have one variable, then the other one can be inferred from the
other.

$$\begin{gather*}
    P(X)=\sum_yP(x,y)\\
    P(Y)=\sum_xP(x,y)
\end{gather*}$$
