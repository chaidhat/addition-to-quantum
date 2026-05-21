# Euler Form

Euler, another person, said that since [[taylor-series]] is a thing, we can say that

$$\begin{gather*}
    e^{i\theta}=1+i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+\cdots\\
    =1+i\theta-\frac{\theta^2}{2!}-i\frac{\theta^3}{3!}+\frac{\theta^4}{4!}+i\frac{\theta^5}{5!}
\end{gather*}$$

If we rearrange the terms we get

$$\begin{gather*}
    e^{i\theta}=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right)+i\left(\theta -\frac{\theta^3}{3!}+\frac{\theta^5}{5!}+\cdots\right)\\
    =\cos\theta+i\sin\theta
\end{gather*}$$

This means we can represent [[complex-numbers]] in this weird form too:

$$\begin{gather*}
    z=re^{i\theta}
\end{gather*}$$

also trigometry can use complex numbers too
$$\cos\theta=
    \frac{1}{2}(e^{i\theta}+e^{-i\theta})$$
$$\sin\theta=
    \frac{1}{2i}(e^{i\theta}-e^{-i\theta})$$
