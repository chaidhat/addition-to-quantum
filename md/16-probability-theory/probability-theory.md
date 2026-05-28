# Probability Theory

probability space $\Sigma$ has points and [[element|elements]] and associated
probabilities with them

example:

coin flip

$$
\begin{gather*}
    \sum=\{e:H,T\}\rightarrow\frac{1}{2}
\end{gather*}
$$

Sum of all probability of your space should be 1

$$
\begin{gather*}
    \sum P(\Sigma)=1
\end{gather*}
$$

We have a random variable $X$. You have an event in that random
[[variable|variable]] space called $x$. The probability of finding that event in
that random variable distribution

$$
\begin{gather*}
    P(X)=\sum_{e\in V_x}P(e)
\end{gather*}
$$

where

$$
\begin{gather*}
    V_x=\{e:X(e)=x\}
\end{gather*}
$$
Some famous probability distributions (that are used in this guide) are
* [[poisson-distribution]]
* [[gaussian-distribution]]

Note that the probabilities are always between 0 and 1

$$
\begin{gather*}
    0\leq P(x)\leq 1
\end{gather*}
$$
